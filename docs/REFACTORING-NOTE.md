# Architecture Refactoring - Problem Storage

## Changes Made

### 1. Removed topicId from Problem
**Before:**
```typescript
interface Problem {
  id: string;
  topicId: string;  // ❌ Removed
  title: string;
  // ...
}
```

**After:**
```typescript
interface Problem {
  id: string;
  title: string;
  // No topicId - 1-many relationship defined in Topic
}
```

### 2. Topics now own their Problems
**Before:**
```typescript
interface Topic {
  problemIds: string[];  // Reference to problems
}
```

**After:**
```typescript
interface Topic {
  problems: Problem[];  // Direct ownership
}
```

### 3. Problem files moved to public folder
**Before:** Inline strings in config
```typescript
{
  initialHTML: `<div>...</div>`,
  initialCSS: `.container { ... }`
}
```

**After:** External files
```
public/problems/
  ├── flexbox-basics/
  │   ├── flex-1.html
  │   ├── flex-1.css
  │   └── flex-1-solution.css
  ├── grid-fundamentals/
  │   └── ...
```

### 4. File naming convention
- HTML: `{problemId}.html` (e.g., `flex-1.html`)
- Initial CSS: `{problemId}.css` (e.g., `flex-1.css`)
- Solution CSS: `{problemId}-solution.css` (e.g., `flex-1-solution.css`)

## Migration Status

✅ Type system updated (Problem, Topic)
✅ Config structure updated (topics.ts)
✅ Sample files created (flex-1)
✅ Components updated:
  - TopicList (use topic.problems)
  - ProblemView (fetch files)
  - ProblemNav (use topic.problems)
  - utils/progress.ts
✅ problemLoader utility created
✅ All 18 problems HTML/CSS files created
✅ Tested end-to-end - all problems loading successfully
✅ Old problems.ts file removed

## Refactoring Complete

All changes have been implemented and tested. The application now:
- Loads problem HTML/CSS from external files
- Uses cleaner 1-many relationship (Topic owns Problem[])
- Maintains all functionality with better separation of concerns
