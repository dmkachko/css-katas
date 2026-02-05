import React from 'react';
import { useLocation } from 'wouter';
import { topics } from '../config/topics';
import { useStore } from '../store/useStore';
import { calculateTopicProgress } from '../utils/progress';
import { TopicCard } from './TopicCard';
import { EmptyState } from './EmptyState';

export const TopicList: React.FC = () => {
  const completedProblems = useStore((state) => state.completedProblems);
  const [, setLocation] = useLocation();

  if (topics.length === 0) {
    return <EmptyState />;
  }

  const handleTopicClick = (topicId: string) => {
    const topic = topics.find((t) => t.id === topicId);
    if (topic && topic.problemIds.length > 0) {
      const firstProblemId = topic.problemIds[0];
      setLocation(`/topic/${topicId}/${firstProblemId}`);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">CSS Katas</h1>
        <p className="text-lg text-secondary">
          Master CSS through interactive exercises
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {topics.map((topic) => {
          const progress = calculateTopicProgress(
            topic,
            completedProblems[topic.id] || []
          );

          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              progress={progress}
              onClick={() => handleTopicClick(topic.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
