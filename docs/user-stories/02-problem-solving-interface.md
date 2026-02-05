# User Story 2: Problem-Solving Interface

**As a** CSS learner
**I want to** solve CSS problems with a live preview and code editor
**So that** I can practice CSS skills and see immediate visual feedback

## Acceptance Criteria

1. Users can navigate from topic list to a specific topic's problems
2. Problem interface displays:
   - Problem title and description
   - Code editor pane (for CSS input)
   - Preview pane (renders HTML with user's CSS)
   - Problem navigation (previous/next)
   - Mark as complete button
3. Split-pane layout with two modes:
   - Horizontal: Code left, preview right (default)
   - Vertical: Code top, preview bottom
4. Each pane can be shown/hidden independently
5. User can switch between problems in a topic
6. User can mark problem as complete (updates progress in store)
7. Already-completed problems show visual indicator
8. User can navigate back to topic list
9. Layout preference (horizontal/vertical) persists in local storage
10. Pane visibility preference persists in local storage

## Dependencies

- User Story 1: Topic list and progress tracking (✅ Complete)
- Code editor library: Monaco Editor, CodeMirror, or Ace (to be selected)
- Routing: React Router or similar (to be implemented)

## Test Cases

### TC2.1: Navigate to Topic from List
**Given** I am viewing the topic list
**When** I click on a topic card
**Then** I should navigate to that topic's first problem

**Test Data:** Click "Flexbox Basics" topic card
**Expected:** Navigate to problem view showing "flex-1" problem

---

### TC2.2: Display Problem Interface
**Given** I have navigated to a topic
**When** the problem interface loads
**Then** I should see:
- Problem title and description
- Code editor pane with initial CSS (if provided)
- Preview pane with HTML structure
- Navigation controls (previous/next)
- "Mark as Complete" button
- Layout toggle button
- Show/hide controls for panes

**Test Data:** Navigate to Flexbox Basics topic
**Expected:** All UI elements visible and functional

---

### TC2.3: Write CSS and See Live Preview
**Given** I am viewing a problem
**When** I type CSS in the code editor
**Then** the preview pane should update in real-time (or with short delay)

**Test Data:** Type `display: flex;` in editor
**Expected:** Preview updates to show flexbox layout applied

**Note:** May use debouncing (e.g., 300ms delay) for performance

---

### TC2.4: Mark Problem as Complete
**Given** I am viewing a problem
**When** I click "Mark as Complete"
**Then**:
- Problem is marked as complete in local storage
- Visual indicator shows completion (e.g., checkmark, green border)
- Topic list progress updates accordingly

**Test Data:** Complete "flex-1" problem
**Expected:** Local storage shows flex-1 in completedProblems, topic shows 1/5 progress

---

### TC2.5: Navigate Between Problems (Next)
**Given** I am viewing a problem that is not the last in the topic
**When** I click "Next Problem"
**Then** I should navigate to the next problem in the topic

**Test Data:** On "flex-1", click Next
**Expected:** Navigate to "flex-2"

---

### TC2.6: Navigate Between Problems (Previous)
**Given** I am viewing a problem that is not the first in the topic
**When** I click "Previous Problem"
**Then** I should navigate to the previous problem in the topic

**Test Data:** On "flex-3", click Previous
**Expected:** Navigate to "flex-2"

---

### TC2.7: Navigation Boundaries
**Given** I am viewing the first or last problem in a topic
**When** I look at the navigation controls
**Then**:
- "Previous" is disabled on first problem
- "Next" is disabled on last problem

**Test Data:** On "flex-1", Previous disabled; on "flex-5", Next disabled
**Expected:** Buttons visually disabled and non-clickable

---

### TC2.8: Completed Problem Indicator
**Given** I have marked a problem as complete
**When** I navigate away and return to that problem
**Then** the problem should show a visual indicator of completion

**Test Data:** Complete "flex-2", navigate to "flex-3", return to "flex-2"
**Expected:** "flex-2" shows checkmark or completed badge

---

### TC2.9: Toggle Layout (Horizontal to Vertical)
**Given** I am viewing a problem with horizontal layout (default)
**When** I click the layout toggle button
**Then** the panes should rearrange to vertical layout (code top, preview bottom)

**Test Data:** Click layout toggle
**Expected:** Layout changes to vertical, button shows current state

---

### TC2.10: Toggle Layout (Vertical to Horizontal)
**Given** I am viewing a problem with vertical layout
**When** I click the layout toggle button
**Then** the panes should rearrange to horizontal layout (code left, preview right)

**Test Data:** Click layout toggle from vertical
**Expected:** Layout changes to horizontal

---

### TC2.11: Hide Code Pane
**Given** I am viewing a problem with both panes visible
**When** I click "Hide Code"
**Then**:
- Code pane collapses/hides
- Preview pane expands to fill space
- "Show Code" button appears

**Test Data:** Click hide button on code pane
**Expected:** Only preview visible, show button available

---

### TC2.12: Show Code Pane
**Given** the code pane is hidden
**When** I click "Show Code"
**Then** the code pane should reappear

**Test Data:** Click "Show Code" after hiding
**Expected:** Code pane visible again

---

### TC2.13: Hide Preview Pane
**Given** I am viewing a problem with both panes visible
**When** I click "Hide Preview"
**Then**:
- Preview pane collapses/hides
- Code pane expands to fill space
- "Show Preview" button appears

**Test Data:** Click hide button on preview pane
**Expected:** Only code visible, show button available

---

### TC2.14: Show Preview Pane
**Given** the preview pane is hidden
**When** I click "Show Preview"
**Then** the preview pane should reappear

**Test Data:** Click "Show Preview" after hiding
**Expected:** Preview pane visible again

---

### TC2.15: Persist Layout Preference
**Given** I have changed the layout to vertical
**When** I navigate to another problem or refresh the page
**Then** the vertical layout preference should persist

**Test Data:** Set vertical layout, navigate away, return
**Expected:** Layout remains vertical

---

### TC2.16: Persist Pane Visibility
**Given** I have hidden the code pane
**When** I navigate to another problem or refresh the page
**Then** the code pane should remain hidden

**Test Data:** Hide code pane, refresh page
**Expected:** Code pane still hidden after refresh

---

### TC2.17: Navigate Back to Topic List
**Given** I am viewing a problem
**When** I click "Back to Topics" or similar navigation
**Then** I should return to the topic list

**Test Data:** Click back button
**Expected:** Navigate to topic list, progress updated

---

### TC2.18: URL-Based Direct Access (If Routing Implemented)
**Given** routing is implemented
**When** I navigate directly to a problem URL (e.g., `/topic/flexbox-basics/flex-2`)
**Then** the correct problem should load

**Test Data:** Direct URL: `/topic/flexbox-basics/flex-3`
**Expected:** Problem "flex-3" loads correctly

**Note:** Depends on routing implementation choice

---

### TC2.19: Handle Invalid Problem ID
**Given** I navigate to a non-existent problem
**When** the app attempts to load the problem
**Then** show an error message or redirect to topic list

**Test Data:** Navigate to `/topic/flexbox-basics/invalid-id`
**Expected:** Error message or graceful redirect

---

### TC2.20: CSS Persistence During Session (Optional)
**Given** I have written CSS for a problem
**When** I navigate to another problem and return
**Then** my CSS should still be there

**Test Data:** Write CSS in "flex-1", go to "flex-2", return to "flex-1"
**Expected (Optional):** CSS preserved in current session
**Expected (Minimum):** CSS resets to initial state

**Note:** Session CSS persistence is optional for User Story 2. Persistent CSS saving across sessions may be deferred to a future story.

---

## Technical Notes

### Code Editor Selection
- **Options:** Monaco Editor (VS Code), CodeMirror, Ace
- **Recommendation:** Start with CodeMirror (lighter) or Monaco (feature-rich)
- **Must have:** Syntax highlighting for CSS, line numbers, basic editing

### Preview Rendering
- Use an iframe or shadow DOM to isolate user CSS
- Inject user CSS into predefined HTML structure
- Refresh preview on CSS change (debounced)

### Routing
- **Options:** React Router, Wouter (lightweight), manual history API
- **URL structure:** `/topic/:topicId/:problemId`
- **Fallback:** Topic list as home page

### State Updates
- Add `currentProblem` to Zustand store (session state)
- Add `layoutPreference` to persisted state
- Add `paneVisibility` to persisted state
- Use existing `completedProblems` for progress

### Problem Configuration
Problem structure to be defined in config:
```typescript
interface Problem {
  id: string;
  title: string;
  description: string;
  instructions: string;
  initialCSS?: string;
  initialHTML: string;
  solutionCSS?: string; // Optional, for reference
}
```

## Out of Scope for User Story 2

- Automated solution checking (user self-evaluates)
- Hints or solution reveal
- Code editor advanced features (autocomplete, linting)
- Problem difficulty ratings
- Time tracking
- Multi-file problems (HTML + CSS editing)
- Responsive preview (different device sizes)

These may be addressed in future user stories.
