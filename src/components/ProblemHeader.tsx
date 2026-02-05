import React from 'react';
import { useLocation } from 'wouter';
import { useStore } from '../store/useStore';
import { ProblemControls } from './ProblemControls';
import { ThemeToggle } from './ThemeToggle';

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
          className="link-button"
          title="Back to Topics"
          style={{ fontSize: '20px' }}
        >
          ←
        </button>

        {/* Center: Title */}
        <h1 className="text-xl font-bold text-primary flex-1 text-center px-4">
          {title}
        </h1>

        {/* Right: Instructions + View Controls + Theme */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="link-button text-sm"
          >
            {showInstructions ? '▼' : '▶'} Instructions
          </button>

          <ProblemControls />

          <ThemeToggle />
        </div>
      </div>

      {/* Second row: Description + Mark Complete */}
      <div className="px-4 pb-3 flex items-center gap-4">
        <p className="text-sm text-secondary">{description}</p>
        <button
          onClick={handleToggleComplete}
          className="link-button text-sm font-bold"
          style={{ textDecoration: 'underline' }}
        >
          {isComplete ? '✓ Completed' : '✓ Mark as Complete'}
        </button>
      </div>

      {/* Instructions panel */}
      {showInstructions && (
        <div className="p-4 bg-accent border-t border-color">
          <p className="text-sm font-medium text-secondary mb-1">Instructions:</p>
          <p className="text-sm text-secondary">{instructions}</p>
        </div>
      )}
    </div>
  );
};
