# CSS Katas - General Project Rules

## Project Overview
This is a CSS learning platform with interactive exercises. Users solve CSS problems with live preview and self-evaluation.

## Tech Stack
- React 18+ with TypeScript
- Zustand for state management with persist middleware
- Custom Tailwind-like utility CSS system (not full Tailwind)
- Vite for build tooling
- Code editor library (Monaco/CodeMirror/Ace)

## Project Structure
```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific components and logic
├── hooks/          # Custom React hooks
├── store/          # Zustand store(s)
├── styles/         # CSS utilities and theme variables
├── config/         # Topics and questions config
├── types/          # TypeScript type definitions
└── utils/          # Helper functions
```

## General Principles
- Keep solutions simple and focused
- Don't over-engineer
- Don't add features not in requirements
- Separate concerns (UI, business logic, state)
- Make code testable and maintainable

## Testing & Acceptance Criteria

### Test Case Review
Before implementing a user story, review all test cases for:
- **Full implementation readiness**: Identify test cases that require features from future user stories
- **Stub requirements**: Determine which test cases need placeholder/stub implementations
- **Dependency mapping**: Note which test cases depend on components not yet built

### Incremental Development
- Don't require testing functionality that hasn't been implemented yet
- Implement minimal stubs to satisfy test cases that depend on future features
- Example: If navigation requires routing (User Story 2), log to console in User Story 1
- Clearly document which test cases are deferred to future stories

### Acceptance Criteria Interpretation
- Test cases should match the scope of the current user story
- If a test case requires features outside the current story's scope, either:
  1. Implement a minimal stub that demonstrates the hook point
  2. Note the test case as "deferred to Story X"
  3. Update the test case to match the incremental scope
- Mark partial implementations clearly in code comments

### Testing Approach
- Manual testing is acceptable for UI-heavy features
- Use browser DevTools to verify state and local storage
- Test across both light and dark themes
- Verify keyboard navigation and accessibility

## Code Quality

### Naming Conventions
- Components: PascalCase (`TopicList`, `CodeEditor`)
- Files: kebab-case for utilities, PascalCase for components
- Hooks: camelCase with `use` prefix (`useTheme`, `useProgress`)
- Constants: UPPER_SNAKE_CASE
- CSS classes: kebab-case (`bg-primary`, `flex-col`)

### Comments
- Explain WHY, not WHAT
- Document complex logic or non-obvious decisions
- Add JSDoc for public APIs and custom hooks
- No commented-out code (use git history)

## Don'ts
- ❌ Don't install full Tailwind CSS
- ❌ Don't add unnecessary dependencies
- ❌ Don't add backend/API calls (everything is local)
- ❌ Don't over-engineer solutions
- ❌ Don't add features not in requirements

## Project-Specific Notes
- Questions and topics come from config files (format TBD)
- User self-evaluates solutions (no automated checking)
- Split pane can be horizontal (left/right) or vertical (top/bottom)
- Panes can be hidden/shown independently
- All user progress stored locally (no accounts, no server)
