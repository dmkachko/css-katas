import type { Problem } from './problem';

export interface Topic {
  id: string;
  title: string;
  description: string;
  problems: Problem[];
}

// For backwards compatibility during migration
export interface TopicConfig {
  id: string;
  title: string;
  description: string;
  problemIds: string[];
}
