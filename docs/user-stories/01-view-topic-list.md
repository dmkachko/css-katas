# User Story 1: View Topic List with Progress

**As a** CSS learner
**I want to** see a list of available topics with my progress on each
**So that** I can choose what to practice next and track my learning journey

## Acceptance Criteria

1. The home page displays a list of all available CSS topics
2. Each topic shows:
   - Topic title
   - Brief description (optional)
   - Progress indicator (e.g., "5/10 completed" or percentage)
   - Visual progress bar or indicator
3. Topics are clearly distinguishable and clickable
4. Progress persists across browser sessions
5. Progress accurately reflects completed problems
6. UI respects the selected theme (dark/light)

## Test Cases

### TC1.1: Display All Topics
**Given** the application has loaded
**When** I navigate to the home page
**Then** I should see a list of all available topics from the config

**Test Data:** Config with 5 topics
**Expected:** All 5 topics are visible

---

### TC1.2: Display Topic with No Progress
**Given** I am a new user with no saved progress
**When** I view the topic list
**Then** each topic should show 0% or "0/N completed"

**Test Data:** Fresh browser with cleared local storage
**Expected:** All progress indicators show 0

---

### TC1.3: Display Topic with Partial Progress
**Given** I have completed 3 out of 8 problems in a topic
**When** I view the topic list
**Then** that topic should show "3/8 completed" or "37.5%"

**Test Data:** Local storage with 3 completed problems
**Expected:** Progress indicator shows 3/8 (37.5%)

---

### TC1.4: Display Topic with Complete Progress
**Given** I have completed all problems in a topic
**When** I view the topic list
**Then** that topic should show "8/8 completed" or "100%" with a completion indicator

**Test Data:** Local storage with all problems marked complete
**Expected:** Progress shows 100%, topic marked as complete

---

### TC1.5: Progress Persists Across Sessions
**Given** I have completed some problems in a topic
**When** I close the browser and reopen the application
**Then** my progress should be retained and displayed correctly

**Test Data:** Complete 3 problems, close browser, reopen
**Expected:** Progress still shows 3 completed

---

### TC1.6: Click Topic to Enter (Stub)
**Given** I am viewing the topic list
**When** I click on a topic
**Then** I should navigate to that topic's problem-solving interface

**Test Data:** Click "Flexbox Basics" topic
**Expected (User Story 1):** Topic click is handled (console log or placeholder)
**Expected (User Story 2):** Navigate to Flexbox Basics problem view

**Note:** Full navigation/routing implemented in User Story 2. User Story 1 implements the click handler hook point.

---

### TC1.7: Theme Support
**Given** I have selected dark/light theme
**When** I view the topic list
**Then** all elements should render with appropriate theme colors from CSS variables

**Test Data:** Toggle between dark and light themes
**Expected:** Topic list updates colors appropriately

---

### TC1.8: Empty State Handling
**Given** the config has no topics defined
**When** I view the home page
**Then** I should see an appropriate message (e.g., "No topics available")

**Test Data:** Empty topics config
**Expected:** Friendly empty state message displayed

---

## Technical Notes

- Progress calculation: `completedProblems / totalProblems * 100`
- Local storage key structure to be defined (e.g., `css-katas-progress`)
- Topics loaded from config file on application initialization
- Progress updates should trigger re-render of topic list
