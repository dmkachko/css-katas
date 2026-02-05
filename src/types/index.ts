export type { Topic } from './topic';
export type { TopicProgress, ProgressStore } from './progress';

export type Theme = 'light' | 'dark';

export interface UIState {
  theme: Theme;
}
