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
    <div className="bg-secondary border-b border-color">
      {/* Top row: Back | Title | Controls */}
      <div className="flex items-center justify-between p-4">
        {/* Left: Back button (icon only, link style) */}
        <button
          onClick={() => setLocation('/')}
          className="text-secondary cursor-pointer transition"
          style={{
            transition: 'all var(--transition-base)',
            fontSize: '20px',
            background: 'none',
            border: 'none',
            padding: '4px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--color-text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--color-text-secondary)';
          }}
          title="Back to Topics"
        >
          ←
        </button>

        {/* Center: Title */}
        <h1 className="text-xl font-bold text-primary flex-1 text-center px-4">
          {title}
        </h1>

        {/* Right: Instructions + View Controls */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="px-3 py-2 bg-accent border border-color rounded-md text-secondary text-sm font-medium cursor-pointer transition"
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
            {showInstructions ? '▼' : '▶'} Instructions
          </button>

          <ProblemControls />
        </div>
      </div>

      {/* Second row: Description */}
      <div className="px-4 pb-3">
        <p className="text-sm text-secondary">{description}</p>
      </div>

      {/* Instructions panel */}
      {showInstructions && (
        <div className="p-4 bg-accent border-t border-color">
          <p className="text-sm font-medium text-secondary mb-1">Instructions:</p>
          <p className="text-sm text-secondary">{instructions}</p>
        </div>
      )}

      {/* Mark complete button (moved to bottom of header) */}
      <div className="px-4 pb-4">
        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded-md font-medium cursor-pointer transition text-sm ${
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
    </div>
  );
};
