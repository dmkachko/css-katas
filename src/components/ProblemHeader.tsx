import React from 'react';
import { useLocation } from 'wouter';
import { useStore } from '../store/useStore';
import { ProblemControls } from './ProblemControls';

interface ProblemHeaderProps {
  topicId: string;
  problemId: string;
  title: string;
  description: string;
  instructions: string;
}

export const ProblemHeader: React.FC<ProblemHeaderProps> = ({
  topicId,
  problemId,
  title,
  description,
  instructions,
}) => {
  const [, setLocation] = useLocation();
  const [showInstructions, setShowInstructions] = React.useState(false);
  const completedProblems = useStore((state) => state.completedProblems);
  const markProblemComplete = useStore((state) => state.markProblemComplete);
  const markProblemIncomplete = useStore((state) => state.markProblemIncomplete);

  const isComplete =
    completedProblems[topicId]?.includes(problemId) || false;

  const handleToggleComplete = () => {
    if (isComplete) {
      markProblemIncomplete(topicId, problemId);
    } else {
      markProblemComplete(topicId, problemId);
    }
  };

  return (
    <div className="bg-secondary border border-color rounded-md p-6">
      <div className="flex items-start justify-between mb-4">
        <button
          onClick={() => setLocation('/')}
          className="px-4 py-2 bg-accent border border-color rounded-md text-secondary font-medium cursor-pointer transition"
          style={{
            transition: 'all var(--transition-base)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          ← Back to Topics
        </button>

        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded-md font-medium cursor-pointer transition ${
            isComplete
              ? 'bg-accent border border-color text-secondary'
              : 'border-2 text-primary'
          }`}
          style={{
            borderColor: isComplete
              ? 'var(--color-border)'
              : 'var(--color-progress-complete)',
            transition: 'all var(--transition-base)',
          }}
        >
          {isComplete ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>

      <h1 className="text-2xl font-bold text-primary mb-2">{title}</h1>
      <p className="text-base text-secondary mb-3">{description}</p>

      <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
        <button
          onClick={() => setShowInstructions(!showInstructions)}
          className="px-4 py-2 bg-accent border border-color rounded-md text-secondary font-medium cursor-pointer transition"
          style={{
            transition: 'all var(--transition-base)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          {showInstructions ? '▼ Hide Instructions' : '▶ Show Instructions'}
        </button>

        <ProblemControls />
      </div>

      {showInstructions && (
        <div className="p-4 bg-accent rounded-md border border-color mt-2">
          <p className="text-sm font-medium text-secondary mb-1">Instructions:</p>
          <p className="text-sm text-secondary">{instructions}</p>
        </div>
      )}
    </div>
  );
};
