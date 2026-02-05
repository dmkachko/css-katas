import React from 'react';
import { useLocation } from 'wouter';
import { topics } from '../config/topics';
import { useStore } from '../store/useStore';
import { calculateTopicProgress } from '../utils/progress';
import { TopicCard } from './TopicCard';
import { EmptyState } from './EmptyState';
import { ThemeToggle } from './ThemeToggle';

export const TopicList: React.FC = () => {
  const completedProblems = useStore((state) => state.completedProblems);
  const [, setLocation] = useLocation();

  if (topics.length === 0) {
    return <EmptyState />;
  }

  const handleTopicClick = (topicId: string) => {
    const topic = topics.find((t) => t.id === topicId);
    if (topic && topic.problems.length > 0) {
      const firstProblemId = topic.problems[0].id;
      setLocation(`/topic/${topicId}/${firstProblemId}`);
    }
  };

  return (
    <div className="w-full grid-layout-page">
      {/* Fixed Header */}
      <header className="bg-secondary border-b border-color p-6">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl font-bold text-primary">CSS Katas</h1>
            <ThemeToggle />
          </div>
          <p className="text-lg text-secondary">
            Master CSS through interactive exercises
          </p>
        </div>
      </header>

      {/* Scrollable Body */}
      <div className="overflow-auto">
        <div className="w-full max-w-4xl mx-auto p-6">
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
      </div>
    </div>
  );
};
