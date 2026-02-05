import type { Topic, TopicProgress } from '../types';

export function calculateTopicProgress(
  topic: Topic,
  completedProblemIds: string[]
): TopicProgress {
  const totalProblems = topic.problems.length;
  const problemIds = topic.problems.map((p) => p.id);
  const completed = completedProblemIds.filter((id) =>
    problemIds.includes(id)
  ).length;
  const percentComplete = totalProblems > 0 ? (completed / totalProblems) * 100 : 0;

  return {
    topicId: topic.id,
    completedProblemIds,
    totalProblems,
    percentComplete,
  };
}
