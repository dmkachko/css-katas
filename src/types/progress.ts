export interface TopicProgress {
  topicId: string;
  completedProblemIds: string[];
  totalProblems: number;
  percentComplete: number;
}

export interface ProgressStore {
  completedProblems: Record<string, string[]>;
}
