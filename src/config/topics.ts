import type { Topic, Problem } from '../types';
import {flexboxAdvancedKatas, flexboxBasicsKatas} from "./flex.ts";

const gridProblems: Problem[] = [
  {
    id: 'grid-1',
    title: 'Basic Grid Layout',
    description: 'Create a 3-column grid',
    instructions:
      'Use display: grid and grid-template-columns to create a 3-column layout with equal widths.',
  },
  {
    id: 'grid-2',
    title: 'Grid Gap',
    description: 'Add spacing between grid items',
    instructions:
      'Create a 2-column grid and add a 20px gap between all items using the gap property.',
  },
  {
    id: 'grid-3',
    title: 'Grid Spanning',
    description: 'Make an item span multiple columns',
    instructions: 'Use grid-column: span 2 to make the first item span 2 columns.',
  },
  {
    id: 'grid-4',
    title: 'Grid Template Areas',
    description: 'Create a layout using grid template areas',
    instructions:
      'Use grid-template-areas to create a header, sidebar, main, and footer layout.',
  },
  {
    id: 'grid-5',
    title: 'Auto-fit Columns',
    description: 'Create responsive columns with auto-fit',
    instructions:
      'Use grid-template-columns with repeat and auto-fit to create responsive columns.',
  },
  {
    id: 'grid-6',
    title: 'Justify and Align Grid',
    description: 'Center grid items within their cells',
    instructions:
      'Use justify-items and align-items on the grid container to center all items.',
  },
];

const positioningProblems: Problem[] = [
  {
    id: 'pos-1',
    title: 'Relative Positioning',
    description: 'Move an element using relative positioning',
    instructions:
      'Use position: relative to move the box 20px down and 30px to the right from its normal position.',
  },
  {
    id: 'pos-2',
    title: 'Absolute Positioning',
    description: 'Position an element absolutely within its parent',
    instructions:
      'Use position: absolute on the box to position it 10px from the top-right corner of the container.',
  },
  {
    id: 'pos-3',
    title: 'Fixed Positioning',
    description: 'Create a fixed navigation bar',
    instructions:
      'Use position: fixed to make the navigation stay at the top of the viewport when scrolling.',
  },
  {
    id: 'pos-4',
    title: 'Sticky Positioning',
    description: 'Create a sticky header that scrolls with content',
    instructions:
      'Use position: sticky to make the header stick to the top when scrolling.',
  },
];

const responsiveProblems: Problem[] = [
  {
    id: 'resp-1',
    title: 'Media Query Basics',
    description: 'Change layout based on screen size',
    instructions:
      'Use a media query to change the background color to lightblue on screens smaller than 600px.',
  },
];

const animationProblems: Problem[] = [
  {
    id: 'anim-1',
    title: 'Simple Transition',
    description: 'Add a smooth transition to a button hover effect',
    instructions:
      'Add a transition property to make the background color change smoothly on hover.',
  },
];

export const topics: Topic[] = [
  {
    id: 'flexbox-basics',
    title: 'Flexbox Basics',
    description: 'Learn the fundamentals of CSS Flexbox layout',
    problems: flexboxBasicsKatas,
  },
  {
    id: 'flexbox-advanced',
    title: 'Flexbox Advanced',
    description: 'Master advanced CSS Flexbox techniques and patterns',
    problems: flexboxAdvancedKatas,
  },
  {
    id: 'grid-fundamentals',
    title: 'Grid Fundamentals',
    description: 'Master CSS Grid layout system',
    problems: gridProblems,
  },
  {
    id: 'positioning',
    title: 'CSS Positioning',
    description: 'Understand relative, absolute, fixed, and sticky positioning',
    problems: positioningProblems,
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Create layouts that work on all screen sizes',
    problems: responsiveProblems,
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    description: 'Add motion and transitions to your interfaces',
    problems: animationProblems,
  },
];

// Helper to get problem by ID across all topics
export const getProblem = (problemId: string): { problem: Problem; topicId: string } | undefined => {
  for (const topic of topics) {
    const problem = topic.problems.find((p) => p.id === problemId);
    if (problem) {
      return { problem, topicId: topic.id };
    }
  }
  return undefined;
};
