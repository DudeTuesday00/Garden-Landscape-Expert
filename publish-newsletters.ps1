# publish-newsletters.ps1
# Build-validate newly-exported newsletter issues, then commit + push to main so
# Cloudflare Pages rebuilds. GATED on `npm run build` (never pushes a broken build).
# Intended to run on a schedule (Windows Task Scheduler) OR manually.
#   -DryRun : do everything EXCEPT git commit/push (safe to inspect the diff first).
param([switch]$DryRun)

$repo = 'D:\ClaudeProjects\plantingatlas\Garden-Landscape-Expert'
$log  = 'D:\ClaudeProjects\plantingatlas\publish-newsletters.log'
function Log($m) {
  $line = '{0}  {1}' -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $m
  $line | Out-File -FilePath $log -Append -Encoding utf8
  Write-Host $line
}

Set-Location $repo

# Act only when the export worker actually dropped newsletter files.
$trigger = git status --porcelain -- src/data/newsletter-content src/data/newsletters.json public/newsletters 2>$null
if (-not $trigger) { Log 'No newsletter changes detected; nothing to publish.'; exit 0 }
Log ('Newsletter changes detected:' + [Environment]::NewLine + ($trigger -join [Environment]::NewLine))

# GATE: the Next.js static export build must succeed before anything is committed.
# Catches a malformed data file (e.g. broken JSON from the exporter) before it
# ever reaches Cloudflare Pages, which would otherwise fail the live deploy.
Log 'npm run build ...'
npm run build 2>&1 | ForEach-Object { Log "  build: $_" }
if ($LASTEXITCODE -ne 0) {
  Log "npm run build FAILED (exit $LASTEXITCODE). Leaving changes UNCOMMITTED for manual review."
  exit 1
}

# Commit message: list the newsletter slugs that changed.
$titles = (git status --porcelain -- src/data/newsletter-content |
  Select-String 'newsletter-content/([^./]+)\.json' |
  ForEach-Object { $_.Matches.Groups[1].Value } |
  Select-Object -Unique) -join ', '
if (-not $titles) { $titles = 'update' }
$msg = "Publish newsletter(s): $titles"

if ($DryRun) {
  Log "DRY RUN complete. Build passed. Would commit + push: $msg"
  exit 0
}

git add -A 2>&1 | Out-Null
git commit -m $msg 2>&1 | ForEach-Object { Log "  commit: $_" }
git push 2>&1 | ForEach-Object { Log "  push: $_" }
if ($LASTEXITCODE -ne 0) { Log 'git push FAILED (check credentials / network).'; exit 1 }
Log "Published + pushed: $msg"
