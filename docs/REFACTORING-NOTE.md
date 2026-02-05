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
🔄 Components need updating:
  - TopicList (use topic.problems)
  - ProblemView (fetch files)
  - ProblemNav (use topic.problems)
  - utils/progress.ts

## Next Steps

1. Create utility to fetch problem files
2. Update all components to use new structure
3. Create all HTML/CSS files for 18 problems
4. Test end-to-end
5. Remove old problems.ts file
