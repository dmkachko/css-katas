import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'flexbox-basics',
    title: 'Flexbox Basics',
    description: 'Learn the fundamentals of CSS Flexbox layout',
    problemIds: ['flex-1', 'flex-2', 'flex-3', 'flex-4', 'flex-5'],
  },
  {
    id: 'grid-fundamentals',
    title: 'Grid Fundamentals',
    description: 'Master CSS Grid layout system',
    problemIds: ['grid-1', 'grid-2', 'grid-3', 'grid-4', 'grid-5', 'grid-6'],
  },
  {
    id: 'positioning',
    title: 'CSS Positioning',
    description: 'Understand relative, absolute, fixed, and sticky positioning',
    problemIds: ['pos-1', 'pos-2', 'pos-3', 'pos-4'],
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    description: 'Create layouts that work on all screen sizes',
    problemIds: ['resp-1'], // More problems to be added
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    description: 'Add motion and transitions to your interfaces',
    problemIds: ['anim-1'], // More problems to be added
  },
];
