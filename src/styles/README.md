# Styles Organization

## Structure

```
src/styles/
├── system/              # Style system (reset + utilities)
│   ├── reset.css       # CSS reset/normalize
│   ├── utilities.css   # Utility classes (flex, p-4, etc.)
│   └── index.css       # Combines system files
├── variables.css        # Design tokens (spacing, colors, etc.)
├── themes.css           # Theme-specific color overrides
└── index.css            # Main entry - imports all styles
```

## Design Philosophy

### variables.css
Contains **default design tokens** including:
- Spacing scale (4px base)
- Border radii
- Shadows
- Transitions
- **Default theme colors** (light theme)

These can be overridden by themes or external stylesheets.

### themes.css
Contains **theme-specific overrides**:
- Light theme: uses defaults from `variables.css` (no overrides needed)
- Dark theme: overrides color variables only

### system/
Contains the **utility class system**:
- `reset.css`: Minimal CSS reset
- `utilities.css`: Tailwind-like utility classes

## Overriding Theme Variables

### Method 1: Add a new theme
Create a new theme in `themes.css`:

```css
:root[data-theme='custom'] {
  --color-bg-primary: #your-color;
  --color-primary: #your-accent;
  /* Override only what you need */
}
```

### Method 2: Override from external stylesheet
Import after our styles and override:

```css
/* In your custom.css */
:root {
  --color-primary: #ff6b6b;
  --space-4: 20px; /* Change spacing scale */
}
```

### Method 3: Inline override
For specific components:

```jsx
<div style={{ '--color-primary': '#ff6b6b' }}>
  {/* Uses custom primary color */}
</div>
```

## Theme Variables Reference

### Colors (overridable)
- `--color-bg-primary` - Main background
- `--color-bg-secondary` - Card/section background
- `--color-bg-accent` - Hover/active states
- `--color-text-primary` - Main text
- `--color-text-secondary` - Secondary text
- `--color-text-muted` - Muted/disabled text
- `--color-border` - Border color
- `--color-border-hover` - Hover border
- `--color-primary` - Brand/accent color
- `--color-primary-hover` - Brand hover state
- `--color-progress-bg` - Progress bar background
- `--color-progress-fill` - Progress bar fill
- `--color-progress-complete` - Completed progress color

### Non-theme Variables (spacing, etc.)
See `variables.css` for full list of spacing, radius, shadow, and transition tokens.
