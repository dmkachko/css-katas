import React from 'react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <p className="text-xl text-muted mb-4">No topics available</p>
      <p className="text-base text-secondary">
        Topics will be loaded from the configuration
      </p>
    </div>
  );
};
