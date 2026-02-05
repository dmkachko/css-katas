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
