---
paths:
  - "src/**/*.{ts,tsx,js,jsx}"
---

# React & TypeScript Development Rules

## React Components
- Use functional components with hooks
- Prefer arrow function syntax for components
- Use TypeScript interfaces for props
- Keep components small and focused (single responsibility)
- Extract reusable logic into custom hooks
- Use React.memo() only when necessary for performance

### Component Pattern
```tsx
// Good component structure
interface ButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = 'primary',
  children
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};
```

## State Management
- Use Zustand for global state
- Configure persist middleware for local storage
- Keep state flat and normalized
- Separate UI state from domain state
- Store structure:
  ```ts
  {
    topics: Topic[],
    progress: Record<topicId, CompletedProblemIds[]>,
    ui: {
      theme: 'light' | 'dark',
      layout: 'horizontal' | 'vertical',
      paneVisibility: { code: boolean, preview: boolean }
    }
  }
  ```
- Don't mutate state directly (use Zustand's set function)

## TypeScript
- Use strict mode
- Define interfaces for all data structures
- Use type inference where possible
- Avoid `any` - use `unknown` if type is truly unknown
- Define prop types inline or as separate interfaces
- Use enums or union types for fixed sets of values

## Styling in Components
- Use custom utility classes from our minimal CSS system
- NO inline styles unless absolutely necessary (dynamic values)
- Theme-aware styling through CSS variables
- Example: `className="flex gap-4 p-4 bg-primary text-white"`

## Performance
- Lazy load the code editor component
- Lazy load topic/problem data
- Debounce live preview updates (if needed)
- Memoize expensive calculations
- Avoid unnecessary re-renders

## Local Storage
- All persistence through Zustand persist middleware
- Gracefully handle storage errors (quota exceeded, disabled storage)
- Provide fallback behavior when storage is unavailable

## Imports
- Group imports: React, third-party, local
- Use absolute imports for common paths
- Avoid circular dependencies
- Example order:
  ```tsx
  import React, { useState } from 'react';
  import { create } from 'zustand';
  import { Button } from '@/components/Button';
  import { useTheme } from '@/hooks/useTheme';
  ```

## React-Specific Don'ts
- ❌ Don't use class components
- ❌ Don't use Redux (we're using Zustand)
- ❌ Don't use inline styles (except for truly dynamic values)
- ❌ Don't install external UI frameworks (Material-UI, Chakra, etc.)

## Testing Considerations
- Components should be testable (pure, single responsibility)
- Separate business logic from UI logic
- Mock local storage in tests
- Test user interactions, not implementation details

## Accessibility
- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Support theme preference from OS (prefers-color-scheme)
- Maintain sufficient color contrast in both themes
