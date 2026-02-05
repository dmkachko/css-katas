import React from 'react';

interface ProgressBarProps {
  percent: number;
  isComplete?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  isComplete = false,
}) => {
  return (
    <div
      className="w-full bg-secondary rounded-full overflow-hidden"
      style={{ height: '8px' }}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full transition"
        style={{
          width: `${percent}%`,
          backgroundColor: isComplete
            ? 'var(--color-progress-complete)'
            : 'var(--color-progress-fill)',
        }}
      />
    </div>
  );
};
