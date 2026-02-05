import type { Problem } from '../types';

export const problems: Record<string, Problem> = {
  // Flexbox Basics problems
  'flex-1': {
    id: 'flex-1',
    topicId: 'flexbox-basics',
    title: 'Center an Element',
    description: 'Use Flexbox to center a box both horizontally and vertically',
    instructions:
      'Apply display: flex to the container and use justify-content and align-items properties to center the child element.',
    initialHTML: `<div class="container">
  <div class="box">Center Me!</div>
</div>`,
    initialCSS: `.container {
  width: 100%;
  height: 300px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.box {
  width: 120px;
  height: 120px;
  background: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
    solutionCSS: `.container {
  width: 100%;
  height: 300px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 120px;
  height: 120px;
  background: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
  },
  'flex-2': {
    id: 'flex-2',
    topicId: 'flexbox-basics',
    title: 'Space Between Items',
    description: 'Distribute items evenly with space-between',
    instructions:
      'Use display: flex and justify-content: space-between to evenly distribute the items across the container.',
    initialHTML: `<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
    initialCSS: `.container {
  width: 100%;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  padding: 20px;
  background: #2196F3;
  color: white;
  font-weight: bold;
}`,
    solutionCSS: `.container {
  width: 100%;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: flex;
  justify-content: space-between;
}

.item {
  padding: 20px;
  background: #2196F3;
  color: white;
  font-weight: bold;
}`,
  },
  'flex-3': {
    id: 'flex-3',
    topicId: 'flexbox-basics',
    title: 'Flex Direction Column',
    description: 'Stack items vertically using flex-direction',
    instructions:
      'Apply display: flex and flex-direction: column to stack the items vertically. Add gap: 10px for spacing.',
    initialHTML: `<div class="container">
  <div class="item">First</div>
  <div class="item">Second</div>
  <div class="item">Third</div>
</div>`,
    initialCSS: `.container {
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  padding: 15px;
  background: #FF5722;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
    solutionCSS: `.container {
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  padding: 15px;
  background: #FF5722;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
  },

  // Grid Fundamentals problems
  'grid-1': {
    id: 'grid-1',
    topicId: 'grid-fundamentals',
    title: 'Basic Grid Layout',
    description: 'Create a 3-column grid',
    instructions:
      'Use display: grid and grid-template-columns to create a 3-column layout with equal widths.',
    initialHTML: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  padding: 30px;
  background: #9C27B0;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.item {
  padding: 30px;
  background: #9C27B0;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
  },
  'grid-2': {
    id: 'grid-2',
    topicId: 'grid-fundamentals',
    title: 'Grid Gap',
    description: 'Add spacing between grid items',
    instructions:
      'Create a 2-column grid and add a 20px gap between all items using the gap property.',
    initialHTML: `<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  padding: 40px;
  background: #00BCD4;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.item {
  padding: 40px;
  background: #00BCD4;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
  },

  // Missing Flexbox problems
  'flex-4': {
    id: 'flex-4',
    topicId: 'flexbox-basics',
    title: 'Align Items',
    description: 'Align items along the cross axis',
    instructions:
      'Use display: flex and align-items to align items to the flex-end (bottom) of the container.',
    initialHTML: `<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>`,
    initialCSS: `.container {
  width: 100%;
  height: 250px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  padding: 20px;
  background: #E91E63;
  color: white;
  font-weight: bold;
}`,
    solutionCSS: `.container {
  width: 100%;
  height: 250px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: flex;
  align-items: flex-end;
}

.item {
  padding: 20px;
  background: #E91E63;
  color: white;
  font-weight: bold;
}`,
  },
  'flex-5': {
    id: 'flex-5',
    topicId: 'flexbox-basics',
    title: 'Flex Wrap',
    description: 'Allow items to wrap to the next line',
    instructions:
      'Use display: flex and flex-wrap: wrap to allow items to wrap when they run out of space.',
    initialHTML: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>`,
    initialCSS: `.container {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.item {
  width: 100px;
  padding: 20px;
  background: #673AB7;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
    solutionCSS: `.container {
  width: 300px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.item {
  width: 100px;
  padding: 20px;
  background: #673AB7;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
  },

  // Missing Grid problems
  'grid-3': {
    id: 'grid-3',
    topicId: 'grid-fundamentals',
    title: 'Grid Spanning',
    description: 'Make an item span multiple columns',
    instructions:
      'Use grid-column: span 2 to make the first item span 2 columns.',
    initialHTML: `<div class="container">
  <div class="item header">Header</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.item {
  padding: 30px;
  background: #3F51B5;
  color: white;
  font-weight: bold;
  text-align: center;
}

.header {
  background: #1976D2;
}`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.item {
  padding: 30px;
  background: #3F51B5;
  color: white;
  font-weight: bold;
  text-align: center;
}

.header {
  background: #1976D2;
  grid-column: span 2;
}`,
  },
  'grid-4': {
    id: 'grid-4',
    topicId: 'grid-fundamentals',
    title: 'Grid Template Areas',
    description: 'Create a layout using grid template areas',
    instructions:
      'Use grid-template-areas to create a header, sidebar, main, and footer layout.',
    initialHTML: `<div class="container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  gap: 10px;
}

.header { background: #F44336; color: white; padding: 20px; }
.sidebar { background: #2196F3; color: white; padding: 20px; }
.main { background: #4CAF50; color: white; padding: 40px; }
.footer { background: #FF9800; color: white; padding: 20px; }`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  gap: 10px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header { background: #F44336; color: white; padding: 20px; grid-area: header; }
.sidebar { background: #2196F3; color: white; padding: 20px; grid-area: sidebar; }
.main { background: #4CAF50; color: white; padding: 40px; grid-area: main; }
.footer { background: #FF9800; color: white; padding: 20px; grid-area: footer; }`,
  },
  'grid-5': {
    id: 'grid-5',
    topicId: 'grid-fundamentals',
    title: 'Auto-fit Columns',
    description: 'Create responsive columns with auto-fit',
    instructions:
      'Use grid-template-columns with repeat and auto-fit to create responsive columns.',
    initialHTML: `<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  gap: 10px;
}

.item {
  padding: 30px;
  background: #009688;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.item {
  padding: 30px;
  background: #009688;
  color: white;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}`,
  },
  'grid-6': {
    id: 'grid-6',
    topicId: 'grid-fundamentals',
    title: 'Justify and Align Grid',
    description: 'Center grid items within their cells',
    instructions:
      'Use justify-items and align-items on the grid container to center all items.',
    initialHTML: `<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
</div>`,
    initialCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 300px;
}

.item {
  width: 60px;
  height: 60px;
  background: #795548;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    solutionCSS: `.container {
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 300px;
  justify-items: center;
  align-items: center;
}

.item {
  width: 60px;
  height: 60px;
  background: #795548;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },

  // Missing Positioning problems
  'pos-2': {
    id: 'pos-2',
    topicId: 'positioning',
    title: 'Absolute Positioning',
    description: 'Position an element absolutely within its parent',
    instructions:
      'Use position: absolute on the box to position it 10px from the top-right corner of the container.',
    initialHTML: `<div class="container">
  <div class="box">Top Right</div>
</div>`,
    initialCSS: `.container {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.box {
  width: 120px;
  padding: 15px;
  background: #FF5722;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
    solutionCSS: `.container {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 20px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.box {
  width: 120px;
  padding: 15px;
  background: #FF5722;
  color: white;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
}`,
  },
  'pos-3': {
    id: 'pos-3',
    topicId: 'positioning',
    title: 'Fixed Positioning',
    description: 'Create a fixed navigation bar',
    instructions:
      'Use position: fixed to make the navigation stay at the top of the viewport when scrolling.',
    initialHTML: `<div class="nav">Fixed Navigation</div>
<div class="content">
  <p>Scroll down to see the fixed navigation stay in place.</p>
  <p>This is some content.</p>
  <p>More content here.</p>
</div>`,
    initialCSS: `.nav {
  padding: 20px;
  background: #607D8B;
  color: white;
  font-weight: bold;
  text-align: center;
}

.content {
  padding: 20px;
  height: 200px;
  overflow-y: auto;
  border: 2px solid #333;
}`,
    solutionCSS: `.nav {
  padding: 20px;
  background: #607D8B;
  color: white;
  font-weight: bold;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.content {
  padding: 20px;
  height: 200px;
  overflow-y: auto;
  border: 2px solid #333;
  margin-top: 60px;
}`,
  },
  'pos-4': {
    id: 'pos-4',
    topicId: 'positioning',
    title: 'Sticky Positioning',
    description: 'Create a sticky header that scrolls with content',
    instructions:
      'Use position: sticky to make the header stick to the top when scrolling.',
    initialHTML: `<div class="container">
  <div class="header">Sticky Header</div>
  <div class="content">
    <p>Scroll to see the header stick.</p>
    <p>Content line 1</p>
    <p>Content line 2</p>
    <p>Content line 3</p>
    <p>Content line 4</p>
    <p>Content line 5</p>
  </div>
</div>`,
    initialCSS: `.container {
  height: 300px;
  overflow-y: auto;
  border: 2px solid #333;
  background: #f0f0f0;
}

.header {
  padding: 20px;
  background: #8BC34A;
  color: white;
  font-weight: bold;
  text-align: center;
}

.content {
  padding: 20px;
}`,
    solutionCSS: `.container {
  height: 300px;
  overflow-y: auto;
  border: 2px solid #333;
  background: #f0f0f0;
}

.header {
  padding: 20px;
  background: #8BC34A;
  color: white;
  font-weight: bold;
  text-align: center;
  position: sticky;
  top: 0;
}

.content {
  padding: 20px;
}`,
  },

  // Responsive Design problems (add minimal set)
  'resp-1': {
    id: 'resp-1',
    topicId: 'responsive-design',
    title: 'Media Query Basics',
    description: 'Change layout based on screen size',
    instructions:
      'Use a media query to change the background color to lightblue on screens smaller than 600px.',
    initialHTML: `<div class="container">
  <p>Resize the browser to see the background change!</p>
</div>`,
    initialCSS: `.container {
  padding: 40px;
  background: lightcoral;
  text-align: center;
  font-weight: bold;
}`,
    solutionCSS: `.container {
  padding: 40px;
  background: lightcoral;
  text-align: center;
  font-weight: bold;
}

@media (max-width: 600px) {
  .container {
    background: lightblue;
  }
}`,
  },

  // Animations problems (add minimal set)
  'anim-1': {
    id: 'anim-1',
    topicId: 'animations',
    title: 'Simple Transition',
    description: 'Add a smooth transition to a button hover effect',
    instructions:
      'Add a transition property to make the background color change smoothly on hover.',
    initialHTML: `<div class="container">
  <button class="btn">Hover Me!</button>
</div>`,
    initialCSS: `.container {
  padding: 40px;
  text-align: center;
}

.btn {
  padding: 15px 30px;
  font-size: 16px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: #1976D2;
}`,
    solutionCSS: `.container {
  padding: 40px;
  text-align: center;
}

.btn {
  padding: 15px 30px;
  font-size: 16px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #1976D2;
}`,
  },

  // CSS Positioning problems
  'pos-1': {
    id: 'pos-1',
    topicId: 'positioning',
    title: 'Relative Positioning',
    description: 'Move an element using relative positioning',
    instructions:
      'Use position: relative to move the box 20px down and 30px to the right from its normal position.',
    initialHTML: `<div class="container">
  <div class="box">Move me!</div>
</div>`,
    initialCSS: `.container {
  padding: 50px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.box {
  width: 150px;
  padding: 20px;
  background: #FF9800;
  color: white;
  font-weight: bold;
  text-align: center;
}`,
    solutionCSS: `.container {
  padding: 50px;
  border: 2px solid #333;
  background: #f0f0f0;
}

.box {
  width: 150px;
  padding: 20px;
  background: #FF9800;
  color: white;
  font-weight: bold;
  text-align: center;
  position: relative;
  top: 20px;
  left: 30px;
}`,
  },
};

export const getProblem = (problemId: string): Problem | undefined => {
  return problems[problemId];
};

export const getProblemsByTopic = (topicId: string): Problem[] => {
  return Object.values(problems).filter((p) => p.topicId === topicId);
};
