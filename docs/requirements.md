# Requirements

## Project Overview

A simple CSS learning site where users can practice CSS skills through interactive exercises. Users work through topics at their own pace, solving CSS problems with immediate visual feedback.

## Features

### Topic Management
- Display list of topics with progress indicators
- Track completion status for each topic
- Show overall progress across all topics

### Problem Solving Interface
- Split-pane layout:
  - Left pane: Code editor for CSS
  - Right pane: Live preview of results
- Layout controls:
  - Toggle visibility of each pane (show/hide)
  - Rearrange panes: side-by-side (left/right) or stacked (top/bottom)
  - Save layout preference
- User self-evaluates solutions
- Mark problems as complete/done
- Skip previously solved questions
- Navigate between problems within a topic

### Progress Persistence
- Save user progress to local storage
- Store current session solutions
- Persist completion status across sessions
- Track which problems have been solved

### Configuration
- Topics defined in config files
- Questions/problems defined in config files
- Config structure to be defined later

## Technical Requirements

### State Management
- Use a global state manager
- State manager must support persistence layer
- Synchronize state with local storage
- Handle session state vs persistent state

### Data Storage
- Local storage for all user progress
- Store:
  - Completed problems per topic
  - Current session state
  - Topic progress percentages
  - Skipped questions
  - UI layout preferences (pane arrangement, visibility)
  - Theme preference (dark/light)

### User Interface
- Responsive split-pane layout
- Code editor component
- Live preview component
- Topic navigation
- Progress indicators
- Theme switcher (dark/light mode)

### Styling System
- Custom Tailwind-like utility class system
  - Mimic only necessary Tailwind utilities
  - Keep it minimal and project-specific
- CSS variables for theming
  - Define color palette using CSS custom properties
  - Support dark and light themes
- Utility classes for:
  - Layout (flexbox, grid basics)
  - Spacing (margin, padding)
  - Typography (sizes, weights)
  - Colors (background, text, borders)
  - Common UI patterns

## Dependencies

- Global state manager with persistence (e.g., Zustand with persist middleware)
- Code editor library (e.g., Monaco Editor, CodeMirror, or Ace)
- Custom CSS utility system (no full Tailwind CSS - create minimal custom utilities)
- CSS variables for theming

## Success Criteria

- Users can view all topics with accurate progress tracking
- Users can write CSS and see results update in real-time
- Progress persists across browser sessions
- Users can skip already-solved problems
- All data stored locally without backend dependency
