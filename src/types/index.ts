export type { Topic, TopicConfig } from './topic';
export type { TopicProgress, ProgressStore } from './progress';
export type { Problem, LayoutMode, PaneVisibility } from './problem';

export type Theme = 'light' | 'dark';

export interface UIState {
  theme: Theme;
}
