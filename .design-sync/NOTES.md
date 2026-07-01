# Design-sync notes — Planting Atlas

## What this is

`design-system/` is a **new, extracted** primitive component package (not
part of the Next.js app's own component tree). It exists solely so this
repo has a real, buildable design-system package that `/design-sync` can
convert and upload to claude.ai/design. The app itself (`src/`) still uses
its own inline Tailwind classes — this package intentionally mirrors those
same class patterns so the two stay visually identical, but nothing in
`src/` imports from `design-system/` (yet).

Pilot scope, per user request: **3 components only** — `Button`, `Card`,
`Badge` — to validate the whole pipeline before committing to the full
10-component kit (Callout, TextInput, Select, Label, Heading, Link,
TrustBadge were cataloged but not yet built).

## Blockers hit this run

- **`DesignSync` tool is unauthorized in this headless session.** `list_projects`
  failed with: *"DesignSync needs design-system authorization, but
  /design-login requires an interactive terminal and is not available in
  this environment. If this is claude.ai/code, ask the user to use Claude
  Design's 'Send to Claude Code Web' ... or provide the project files
  directly."* No project has been created and **nothing has been uploaded**.
  §1 (pick target project) and §5 (upload) are both still pending.
- **No headless Chromium available for the render check**, and it can't be
  installed here: `npx playwright install chromium` fails with `403 request
  rejected: host not permitted` (this environment's network policy blocks
  `cdn.playwright.dev`), and the apt fallback is blocked too (`ppa.launchpadcontent.net`
  403). Ran `package-validate.mjs --no-render-check` with the user's explicit
  sign-off. **The 3 preview cards have never been screenshotted or visually
  graded** — they are mechanically valid (bundle syntax OK, `.d.ts` matched
  3/3, styles.css closure resolves, `@dsCard` markers present) but NOT
  confirmed to render correctly.

## Re-sync risks — read this before the next sync

- **Visual verification is the single biggest gap.** The next sync (in an
  environment with network access to `cdn.playwright.dev`, or an interactive
  session that can run `/design-login`) MUST run the full render check +
  `package-capture.mjs` grading loop (base SKILL.md §4) before this is
  trustworthy. Don't treat this run's clean `package-validate.mjs` exit as
  proof of correct rendering — it explicitly skipped that check.
- **Upload never happened.** No `projectId` is recorded in `config.json`.
  The next sync starts at §1 (pick/create a Claude Design project) fresh.
- `[FONT_REMOTE]` warning is expected and requires no action — `styles.css`
  loads Raleway/Lato from Google Fonts CDN at runtime (matching the host
  app's self-hosted `next/font/google` fonts by family/weight, just served
  differently). If the design agent's render sandbox can't reach Google
  Fonts, this would need to change to `cfg.extraFonts` with vendored woff2s.
- Only 3 of the ~10 cataloged primitives are built. The full catalog (from
  the UI pattern survey) is: Button ✅, Card ✅, Badge ✅, Callout (tip/warning
  boxes in GuideDetail.jsx), TextInput, Select, Label, Heading (h1/h2/h3
  scale), Link (inline text link), TrustBadge (icon pill). Extracting those
  follows the same pattern as the 3 built here — see `design-system/src/components/`.
- No `docsDir` is configured, so all 3 components land in the default
  `general` group and get synthesized `.prompt.md` (from JSDoc + authored
  preview only, no example composition docs). Fine for a pilot; worth adding
  real usage docs if the kit grows.
- `tokens: 56 defined, 17 referenced (1 missing, below threshold)` — informational,
  not investigated this run.

## Commands to resume

```sh
# rebuild after any component/preview change
node .ds-sync/package-build.mjs --config .design-sync/config.json \
  --node-modules ./design-system/node_modules --entry ./design-system/dist/index.js --out ./ds-bundle

# validate (drop --no-render-check once Chromium is installable)
node .ds-sync/package-validate.mjs ./ds-bundle --no-render-check
```
