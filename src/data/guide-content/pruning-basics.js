export const pruningBasicsContent = {
  id: 'pruning-basics',
  hero: {
    emoji: '✂️',
    title: 'Pruning Basics',
    subtitle: 'The few cuts, the right tools, and the one timing rule that keep shrubs and trees healthy and blooming — and prevent the mistakes that cost you a season of flowers.',
  },
  intro: 'Pruning intimidates many gardeners because a wrong cut feels permanent, but the principles are few and consistent across most plants. There are only three basic kinds of cut, a short list of tools, and one timing question that decides whether you keep or remove this year\'s flowers: when does the plant bloom, and on what kind of wood? This guide covers those fundamentals for shrubs and ornamental trees. For the plant-specific timing tables see Winter Garden Prep, for fruit trees see the Fruit Trees guide, for crape myrtles and other ornamental trees see Ornamental Trees, and for the cloud-pruning tradition see Japanese Garden Elements.',
  sections: [
    {
      id: 'why-and-tools',
      title: 'Why Prune, and What You Need',
      blocks: [
        {
          type: 'p',
          text: 'Good pruning has a purpose. The main reasons are to remove dead, diseased, or damaged wood, to open the plant so light and air reach the interior, to control size and shape, and to encourage flowering or fruiting. Pruning without a reason, especially heavy pruning, usually harms the plant.',
        },
        {
          type: 'list',
          items: [
            'Bypass hand pruners cut cleanly like scissors and handle stems up to roughly the thickness of a pencil or a bit more. Anvil-style pruners crush stems and are better for dead wood only.',
            'Loppers give leverage for branches up to roughly an inch and a half or two inches thick.',
            'A folding or curved pruning saw handles anything larger. Saw larger branches in stages rather than trying to force loppers through them.',
            'Hedge shears suit formal, shaped hedges; hand pruners are better for most shrubs, because shearing everything to a uniform surface can thicken the outside and leave the interior bare.',
            'Keep blades sharp and clean. Ragged cuts from dull tools heal slowly and invite disease.',
          ],
        },
        {
          type: 'tip',
          emoji: '🧼',
          text: 'When cutting out diseased wood, wipe the blades with rubbing alcohol between cuts so you do not carry the problem from branch to branch. A dilute bleach solution also works but corrodes tools if left on.',
        },
        {
          type: 'image',
          src: '/guides/pruning-basics/pruning-tools-laid-out.jpg',
          alt: 'Two pairs of hand pruners and a pruning saw laid out side by side on a wooden bench',
          caption: 'Hand pruners and a pruning saw handle most cuts; add loppers for reach and thicker branches.',
        },
      ],
    },
    {
      id: 'three-cuts',
      title: 'The Three Basic Cuts',
      blocks: [
        {
          type: 'p',
          text: 'Nearly every pruning job is one of three cuts. Knowing which you are making, and why, is most of the skill.',
        },
        {
          type: 'table',
          headers: ['Cut', 'What It Is', 'Effect and Use'],
          rows: [
            ['Thinning', 'Removing a whole branch back to its point of origin or to a main branch', 'Opens the plant and reduces density without stimulating a flush of new sprouts; the preferred cut for most shrubs and trees'],
            ['Heading', 'Cutting a branch back to a bud or a side branch, shortening it', 'Stimulates buds just below the cut to grow, making the plant denser and bushier; used for shaping and hedging, and overused it creates dense, witch-broom growth'],
            ['Renewal (rejuvenation)', 'Cutting the oldest stems to the ground, or cutting the whole plant back hard', 'Refreshes overgrown, multi-stemmed shrubs; usually spread over a few years for shrubs that tolerate it'],
          ],
        },
        {
          type: 'list',
          items: [
            'Make each cut just above a bud or side branch, angled slightly away from it, so water runs off and the cut heals cleanly. Avoid leaving stubs, which die back and invite decay.',
            'On branches you intend to remove entirely, cut just outside the slightly swollen "collar" where it meets the trunk or main branch, without cutting flush.',
            'Start with the three D\'s — remove dead, diseased, and damaged wood first, along with crossing or rubbing branches. Often that alone is enough.',
            'For most plants, avoid removing more than about a quarter to a third of the live growth in one season. Heavy cuts should be staged over multiple years.',
          ],
        },
        {
          type: 'tip',
          emoji: '👀',
          text: 'Prune in stages and step back often. It is easy to remove more later but impossible to put a branch back.',
        },
        {
          type: 'image',
          src: '/guides/pruning-basics/pruner-cutting-above-bud.jpg',
          alt: 'A pair of bypass pruners making a clean angled cut on a woody stem just above a small bud',
          caption: 'Cut just above a bud or side branch, angled slightly away, leaving no stub.',
        },
      ],
    },
    {
      id: 'timing',
      title: 'Timing: When You Prune Decides Whether It Blooms',
      blocks: [
        {
          type: 'p',
          text: 'Timing matters most for flowering shrubs. Some plants set next year\'s flower buds on old wood soon after they finish blooming, while others bloom on the current season\'s new growth. Pruning at the wrong time removes the buds.',
        },
        {
          type: 'table',
          headers: ['Blooms On', 'Examples', 'Prune When'],
          rows: [
            ['Old wood (last year\'s growth)', 'Lilac, forsythia, bigleaf hydrangea, oakleaf hydrangea, azalea, rhododendron, spirea (spring-flowering types)', 'Right after flowering finishes — pruning in fall, winter, or early spring removes the coming flowers'],
            ['New wood (this year\'s growth)', 'Panicle and smooth hydrangea, butterfly bush, summer-flowering spirea, many roses', 'Late winter or early spring, before growth starts'],
            ['Some do both, or are grown for foliage', 'Boxwood, holly, many evergreens', 'Light shaping in late spring or summer once new growth firms up'],
          ],
        },
        {
          type: 'list',
          items: [
            'For most trees, the dormant season (late winter, before buds swell) is the usual time for structural pruning, since the framework is visible and wounds close quickly with spring growth.',
            'Avoid heavy pruning in late summer and fall. It can stimulate tender new growth that has no time to harden before frost.',
            'Some trees have special rules. Oaks, for example, are commonly pruned only in the dormant season in regions where oak wilt is a concern — check local extension guidance for your area.',
            'Dead or storm-damaged branches can be removed any time of year.',
          ],
        },
        {
          type: 'warning',
          emoji: '⚠️',
          text: 'If you are unsure whether a shrub blooms on old or new wood, wait and prune right after it flowers. Doing that is rarely harmful, while pruning at the wrong time can cost you an entire season of bloom.',
        },
        {
          type: 'image',
          src: '/guides/pruning-basics/lilac-shrub-in-bloom.jpg',
          alt: 'A lilac shrub covered in purple flower clusters in a spring garden',
          caption: 'Spring-flowering shrubs like lilac set buds on old wood, so prune right after they bloom.',
        },
      ],
    },
    {
      id: 'shrubs-and-hedges',
      title: 'Shrubs, Roses, and Hedges',
      blocks: [
        {
          type: 'p',
          text: 'Three common situations cover a large share of home pruning: overgrown shrubs, roses, and hedges.',
        },
        {
          type: 'list',
          items: [
            'Overgrown multi-stemmed shrubs such as lilac, forsythia, and dogwood respond well to renewal pruning. Each year, cut a third of the oldest, thickest stems to the ground, and the plant refreshes over about three years while remaining full.',
            'Most roses are pruned in late winter or early spring, cutting out dead and weak canes and shaping the rest. Repeat-blooming roses bloom on new wood, while once-blooming old and rambling roses bloom on old wood and are pruned right after flowering.',
            'Formal hedges are shaped with shears, ideally slightly wider at the base than the top so light reaches the lower branches. Trim lightly and often rather than rarely and severely.',
            'Conifers such as arborvitae and juniper generally will not regrow from bare, leafless wood, so never cut back into old wood with no green growth. Prune only within the green foliage.',
          ],
        },
        {
          type: 'tip',
          emoji: '🌿',
          text: 'Cutting a hedge or shrub into a ball or shearing it flat every year is easy but often unhealthy — the outside thickens while the interior loses leaves. Thin some stems out selectively to keep the plant full throughout.',
        },
        {
          type: 'image',
          src: '/guides/pruning-basics/thinning-overgrown-shrub.jpg',
          alt: 'A gardener using loppers to cut an old thick stem to the ground at the base of an overgrown shrub',
          caption: 'Removing a third of the oldest stems each year renews an overgrown shrub without leaving it bare.',
        },
      ],
    },
    {
      id: 'mistakes',
      title: 'Common Mistakes to Avoid',
      blocks: [
        {
          type: 'p',
          text: 'A few errors account for most pruning damage. Avoiding them is more important than mastering technique.',
        },
        {
          type: 'table',
          headers: ['Mistake', 'Why It Hurts', 'Better Approach'],
          rows: [
            ['Topping a tree (cutting the main branches back to stubs)', 'Triggers weak, poorly attached sprouts and leaves large wounds that decay; permanently damages the tree\'s structure', 'Thin selectively, or hire a certified arborist for large trees'],
            ['Shearing everything into a tight ball', 'Thickens the outside and shades the interior, leaving bare inner wood', 'Combine occasional shearing with thinning cuts'],
            ['Pruning spring-flowering shrubs in winter', 'Removes the flower buds already formed on old wood', 'Wait until right after bloom'],
            ['Leaving stubs or cutting flush to the trunk', 'Stubs die back and invite decay; flush cuts damage the trunk collar', 'Cut just outside the branch collar'],
            ['Removing too much at once', 'Stresses the plant and prompts a flush of weak growth', 'Spread heavy pruning over several seasons'],
            ['Using dull or dirty tools', 'Ragged cuts heal slowly and can spread disease', 'Keep blades sharp and wipe them clean after diseased wood'],
          ],
        },
        {
          type: 'tip',
          emoji: '🌳',
          text: 'Large branches, trees near power lines, and anything you would need a ladder or chainsaw for are jobs for a certified arborist. Safety comes first — no pruning job is worth a fall.',
        },
        {
          type: 'image',
          src: '/guides/pruning-basics/clean-cut-branch-collar.jpg',
          alt: 'A tree branch cut off partway from the trunk leaving a long stub beside the swollen branch collar',
          caption: 'A long stub like this dies back and invites decay — cut just outside the branch collar instead.',
        },
      ],
    },
  ],
}
