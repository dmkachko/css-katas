import React from 'react';
import type { Topic, TopicProgress } from '../types';
import { ProgressBar } from './ProgressBar';

interface TopicCardProps {
  topic: Topic;
  progress: TopicProgress;
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  progress,
  onClick,
}) => {
  const isComplete = progress.percentComplete === 100;
  const completed = progress.completedProblemIds.length;
  const total = progress.totalProblems;

  return (
    <div
      onClick={onClick}
      className="topic-card p-6 bg-secondary border border-color rounded-lg shadow-sm cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">{topic.title}</h2>
          <p className="text-base text-secondary">{topic.description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-secondary font-medium">
              {completed} / {total} completed
            </span>
            <span className="text-sm text-muted">
              {Math.round(progress.percentComplete)}%
            </span>
          </div>
          <ProgressBar percent={progress.percentComplete} isComplete={isComplete} />
        </div>
      </div>
    </div>
  );
};
