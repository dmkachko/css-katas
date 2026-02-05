// FLEXBOX BASICS (20)
export const flexboxBasicsKatas = [
    {
        id: 'flex-b-1',
        title: 'Center an Element',
        description: 'Center a single child horizontally and vertically within a fixed-size container.',
        instructions:
            'Set the parent to display:flex; then use justify-content:center and align-items:center.',
    },
    {
        id: 'flex-b-2',
        title: 'Space Between Items',
        description: 'Lay out three items in a row: first on the left, last on the right, middle spaced evenly.',
        instructions:
            'Use display:flex on the container and justify-content:space-between; add gap only if you need consistent spacing.',
    },
    {
        id: 'flex-b-3',
        title: 'Horizontal Nav with Gap',
        description: 'Create a horizontal navigation list with consistent spacing between links.',
        instructions:
            'Use display:flex plus gap on the <ul>; avoid margin hacks that break at wrap/RTL.',
    },
    {
        id: 'flex-b-4',
        title: 'Vertical Stack',
        description: 'Stack items vertically with equal spacing, like a simple sidebar list.',
        instructions:
            'Use display:flex with flex-direction:column and set gap for spacing.',
    },
    {
        id: 'flex-b-5',
        title: 'Align One Item to the End',
        description: 'In a row of items, push only the last item to the far right (e.g., a settings icon).',
        instructions:
            'Put margin-left:auto on the last item (or a spacer) inside the flex row.',
    },
    {
        id: 'flex-b-6',
        title: 'Cross-Axis Alignment',
        description: 'Align items along the cross-axis (e.g., vertically center icons next to text).',
        instructions:
            'Use align-items:center on the container; remember cross-axis depends on flex-direction.',
    },
    {
        id: 'flex-b-7',
        title: 'Baseline Alignment',
        description: 'Align text and icons on the same baseline in a row, like a price and currency symbol.',
        instructions:
            'Use align-items:baseline; ensure children have text baseline (icons may need inline-block).',
    },
    {
        id: 'flex-b-8',
        title: 'Equal Width Columns',
        description: 'Make 3 columns share available width equally regardless of content length.',
        instructions:
            'Assign flex:1 to each column; add min-width if you want to prevent extreme shrinking.',
    },
    {
        id: 'flex-b-9',
        title: 'Fixed + Fluid Layout',
        description: 'Create a row where the left item is fixed width and the right item fills the rest.',
        instructions:
            'Set left to flex:0 0 240px (or width) and right to flex:1.',
    },
    {
        id: 'flex-b-10',
        title: 'Wrap Items to New Lines',
        description: 'Build a tag list that wraps onto multiple lines when space runs out.',
        instructions:
            'Use flex-wrap:wrap and gap on the container; avoid per-item margins.',
    },
    {
        id: 'flex-b-11',
        title: 'Reverse Order',
        description: 'Render items in reverse visual order without changing the DOM order.',
        instructions:
            'Use flex-direction:row-reverse (or column-reverse) on the container.',
    },
    {
        id: 'flex-b-12',
        title: 'Vertical Center with Unknown Height',
        description: 'Center content vertically in a container without knowing child height.',
        instructions:
            'Use display:flex with align-items:center; avoid line-height hacks.',
    },
    {
        id: 'flex-b-13',
        title: 'Even Spacing with Space-Around',
        description: 'Distribute items with equal outer spacing in a row, like an icon dock.',
        instructions:
            'Use justify-content:space-around or space-evenly; compare the visual difference.',
    },
    {
        id: 'flex-b-14',
        title: 'Control Item Growth',
        description: 'Make one item expand while others remain content-sized.',
        instructions:
            'Set the expanding item to flex-grow:1 (or flex:1) and others to flex:0 0 auto.',
    },
    {
        id: 'flex-b-15',
        title: 'Prevent Shrinking',
        description: 'Keep a badge or icon from shrinking when the row gets tight.',
        instructions:
            'Set flex-shrink:0 on the badge/icon; optionally also set a fixed width.',
    },
    {
        id: 'flex-b-16',
        title: 'Order One Item',
        description: 'Move one item earlier or later visually while keeping DOM order intact.',
        instructions:
            'Use order on just the moved item; avoid this for interactive content due to a11y concerns.',
    },
    {
        id: 'flex-b-17',
        title: 'Align Content in a Wrapped Row',
        description: 'When items wrap into multiple rows, control how rows are spaced vertically.',
        instructions:
            'Use align-content (not align-items) to space wrapped rows; requires flex-wrap.',
    },
    {
        id: 'flex-b-18',
        title: 'Simple Responsive Stack',
        description: 'Row on desktop, column on mobile (e.g., avatar + details).',
        instructions:
            'Switch flex-direction at a breakpoint; keep gap consistent for both directions.',
    },
    {
        id: 'flex-b-19',
        title: 'Inline Input + Button',
        description: 'Make an input grow while a button stays fixed, without overflow.',
        instructions:
            'Use flex on the wrapper; set input to flex:1 and button to flex:0 0 auto.',
    },
    {
        id: 'flex-b-20',
        title: 'Center Text in Pills',
        description: 'Create pill chips where label text is perfectly centered vertically and horizontally.',
        instructions:
            'Use display:flex on the pill with align-items:center and justify-content:center.',
    },
];

// FLEXBOX ADVANCED (20)
export const flexboxAdvancedKatas = [
    {
        id: 'flex-a-1',
        title: 'Truncation in a Flex Row',
        description: 'In a row with actions on the right, truncate a long title with ellipsis instead of overflowing.',
        instructions:
            'Give the title container min-width:0 and flex:1; add overflow:hidden, text-overflow:ellipsis, white-space:nowrap.',
    },
    {
        id: 'flex-a-2',
        title: 'Sticky Card Footer',
        description: 'Make a card where the footer stays at the bottom even when the body is short.',
        instructions:
            'Use flex-direction:column on the card; set the body to flex:1 so it absorbs extra space.',
    },
    {
        id: 'flex-a-3',
        title: 'Scrollable Middle Section',
        description: 'Create a sidebar with fixed header/footer and a middle section that scrolls.',
        instructions:
            'Use flex column layout; set the middle to flex:1 and overflow:auto; ensure parent has a bounded height.',
    },
    {
        id: 'flex-a-4',
        title: 'Prevent Layout Shift with Loading',
        description: 'Actions on the right should not jump when the left content loads longer text.',
        instructions:
            'Keep right actions as flex:0 0 auto; left area flex:1 with min-width:0 to absorb changes.',
    },
    {
        id: 'flex-a-5',
        title: 'Center Middle Segment (True Center)',
        description: 'In a header with left and right sections of variable width, keep the middle truly centered.',
        instructions:
            'Use a 3-item layout: left, center (flex:1 with text-align:center), right; ensure side sections are flex:0.',
    },
    {
        id: 'flex-a-6',
        title: 'Equal Height Columns',
        description: 'Make two columns the same height while each contains different content lengths.',
        instructions:
            'Use a flex row; default stretch often works—ensure align-items:stretch and avoid fixed heights on children.',
    },
    {
        id: 'flex-a-7',
        title: 'Nested Flex for Complex Header',
        description: 'Build a card header: left title+subtitle, right actions, subtitle wraps but actions never wrap.',
        instructions:
            'Make the header a flex row; left block flex:1 min-width:0; right block flex:0 with nowrap.',
    },
    {
        id: 'flex-a-8',
        title: 'Auto-Margin Spacer Pattern',
        description: 'Insert a “spacer” that pushes everything after it to the right.',
        instructions:
            'Add an empty element with flex:1 or use margin-left:auto on the first right-side item.',
    },
    {
        id: 'flex-a-9',
        title: 'No-Shrink Media Object',
        description: 'Avatar must never shrink; text may wrap; layout must not overflow.',
        instructions:
            'Set avatar to flex:0 0 auto; set text container to flex:1 and min-width:0.',
    },
    {
        id: 'flex-a-10',
        title: 'Responsive Button Row (Wrap + Align)',
        description: 'Buttons wrap on small screens but remain right-aligned as a group.',
        instructions:
            'Use flex-wrap:wrap; combine justify-content:flex-end and gap; consider putting buttons in a nested flex wrapper.',
    },
    {
        id: 'flex-a-11',
        title: 'Align Wrapped Rows Intentionally',
        description: 'In a wrapped tag list, control vertical spacing between rows and overall block alignment.',
        instructions:
            'Use align-content for row distribution; use gap for consistent spacing; ensure wrapping is enabled.',
    },
    {
        id: 'flex-a-12',
        title: 'Full-Height App Column Without 100vh Traps',
        description: 'Create a full-height column layout where only main content scrolls, robust across mobile.',
        instructions:
            'Use min-height:100dvh (or 100vh fallback) on the root; flex column; main flex:1 with overflow:auto.',
    },
    {
        id: 'flex-a-13',
        title: 'Split Pane with Min/Max Constraints',
        description: 'Left pane is 30% but min 260px and max 420px; right pane takes the rest.',
        instructions:
            'Use flex row; left with flex:0 1 30% plus min/max-width; right flex:1 with min-width:0.',
    },
    {
        id: 'flex-a-14',
        title: 'Baseline-Aligned Price Line',
        description: 'Align currency symbol, big price, and small “/mo” on the same baseline.',
        instructions:
            'Use align-items:baseline on the row; adjust font-size/line-height and ensure inline baselines exist.',
    },
    {
        id: 'flex-a-15',
        title: 'Text + Icon with Perfect Click Target',
        description: 'Create a row where icon and label are aligned, and the full row is clickable without shifting layout.',
        instructions:
            'Make the row a flex container; apply padding to the row, not the children; keep gap consistent.',
    },
    {
        id: 'flex-a-16',
        title: 'Complex Truncation with Two Lines',
        description: 'In a row, allow a title to wrap to two lines max, then truncate, while actions stay visible.',
        instructions:
            'Left block flex:1 min-width:0; use line-clamp (webkit) for two-line truncation; right block flex:0.',
    },
    {
        id: 'flex-a-17',
        title: 'Prevent “Ghost Overflow” from Long Words',
        description: 'A single long token (URL/hash) should not force horizontal scrolling in a flex layout.',
        instructions:
            'Use min-width:0 on the flex child and add overflow-wrap:anywhere (or word-break) on the text.',
    },
    {
        id: 'flex-a-18',
        title: 'Stable Layout with Icons and Badges',
        description: 'Icons/badges should never compress; only the text area should shrink and truncate.',
        instructions:
            'Set icons/badges to flex-shrink:0; set text container to flex:1 with min-width:0 and ellipsis.',
    },
    {
        id: 'flex-a-19',
        title: 'Modal with Fixed Header/Footer and Scroll Body',
        description: 'Inside a modal, header and footer stay fixed, and only the content area scrolls.',
        instructions:
            'Use a flex column modal container; set body to flex:1 overflow:auto; bound the modal height.',
    },
    {
        id: 'flex-a-20',
        title: 'Avoid A11y Pitfalls of Visual Reorder',
        description: 'Rearrange a layout visually for a breakpoint without changing keyboard/tab order.',
        instructions:
            'Prefer DOM order and responsive flex-direction changes; avoid order for interactive elements unless you also adjust DOM.',
    },
];
