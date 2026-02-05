---
paths:
  - "src/styles/**/*.css"
  - "**/*.css"
---

# CSS & Styling System Rules

## Custom Utility System
We use a **minimal Tailwind-like utility class system** - NOT full Tailwind CSS.

### CSS Variables for Theming
Define colors and theme values with CSS variables:
```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --color-bg: #ffffff;
  --color-text: #1e293b;
  --color-border: #e2e8f0;
}

[data-theme="dark"] {
  --color-bg: #0f172a;
  --color-text: #f1f5f9;
  --color-border: #334155;
}
```

### Theme Switching
- Theme applied via `data-theme="dark"` or `data-theme="light"` on root element
- All colors reference CSS variables
- Supports OS preference: `prefers-color-scheme`

### Utility Classes to Create

#### Layout
- `flex`, `flex-col`, `flex-row`
- `grid`, `grid-cols-2`, `grid-cols-3`
- `items-center`, `items-start`, `items-end`
- `justify-center`, `justify-between`, `justify-end`
- `gap-2`, `gap-4`, `gap-8`

#### Spacing
- Padding: `p-2`, `p-4`, `px-4`, `py-2`
- Margin: `m-2`, `m-4`, `mx-auto`, `my-4`
- Use 4px base unit (p-2 = 8px, p-4 = 16px)

#### Typography
- Sizes: `text-sm`, `text-base`, `text-lg`, `text-xl`
- Weights: `font-normal`, `font-medium`, `font-bold`
- Alignment: `text-center`, `text-left`, `text-right`

#### Colors
- Background: `bg-primary`, `bg-secondary`, `bg-accent`
- Text: `text-primary`, `text-secondary`, `text-muted`
- Border: `border-primary`, `border-secondary`
- Use CSS variables: `background: var(--color-primary)`

#### Common Patterns
- `rounded`, `rounded-lg`, `rounded-full`
- `shadow`, `shadow-md`, `shadow-lg`
- `border`, `border-2`
- `cursor-pointer`
- `hover:` prefix for hover states

## Best Practices
- Keep utility classes minimal and project-specific
- Only create utilities you actually need
- Don't try to replicate all of Tailwind
- Group related utilities in CSS files
- Use CSS nesting if helpful for organization

## Don'ts
- ❌ Don't install full Tailwind CSS
- ❌ Don't use inline styles (except for truly dynamic values)
- ❌ Don't use `!important` (fix specificity instead)
- ❌ Don't create utilities you don't need yet
- ❌ Don't use external CSS frameworks

## File Organization
```
src/styles/
├── variables.css      # CSS custom properties
├── utilities.css      # Utility classes
├── components.css     # Component-specific styles (if needed)
└── themes.css         # Theme definitions
```

## Accessibility
- Maintain color contrast ratios (WCAG AA minimum)
- Test both light and dark themes for readability
- Don't rely solely on color to convey information
- Ensure focus states are visible
