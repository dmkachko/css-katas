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
      className="p-6 bg-secondary border border-color rounded-lg shadow-sm cursor-pointer transition"
      style={{
        transition: 'all var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border-hover)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }}
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
