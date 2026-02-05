import React from 'react';
import { useLocation } from 'wouter';
import { topics } from '../config/topics';

interface ProblemNavProps {
  topicId: string;
  problemId: string;
}

export const ProblemNav: React.FC<ProblemNavProps> = ({
  topicId,
  problemId,
}) => {
  const [, setLocation] = useLocation();

  const topic = topics.find((t) => t.id === topicId);
  if (!topic) return null;

  const problemIds = topic.problems.map((p) => p.id);
  const currentIndex = problemIds.indexOf(problemId);
  const totalProblems = topic.problems.length;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < totalProblems - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      const previousProblemId = problemIds[currentIndex - 1];
      setLocation(`/topic/${topicId}/${previousProblemId}`);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      const nextProblemId = problemIds[currentIndex + 1];
      setLocation(`/topic/${topicId}/${nextProblemId}`);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-secondary border-t border-color">
      <button
        onClick={goToPrevious}
        disabled={!hasPrevious}
        className={`px-4 py-2 rounded-md font-medium transition ${
          hasPrevious
            ? 'bg-accent border border-color text-primary cursor-pointer'
            : 'bg-accent border border-color text-muted cursor-not-allowed opacity-50'
        }`}
        style={{
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={(e) => {
          if (hasPrevious) {
            e.currentTarget.style.borderColor = 'var(--color-border-hover)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        ← Previous
      </button>

      <div className="text-base font-medium text-secondary">
        Problem {currentIndex + 1} of {totalProblems}
      </div>

      <button
        onClick={goToNext}
        disabled={!hasNext}
        className={`px-4 py-2 rounded-md font-medium transition ${
          hasNext
            ? 'bg-accent border border-color text-primary cursor-pointer'
            : 'bg-accent border border-color text-muted cursor-not-allowed opacity-50'
        }`}
        style={{
          transition: 'all var(--transition-base)',
        }}
        onMouseEnter={(e) => {
          if (hasNext) {
            e.currentTarget.style.borderColor = 'var(--color-border-hover)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        Next →
      </button>
    </div>
  );
};
