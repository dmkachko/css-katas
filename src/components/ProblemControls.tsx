import React from 'react';
import { useStore } from '../store/useStore';

export const ProblemControls: React.FC = () => {
  const paneVisibility = useStore((state) => state.paneVisibility);
  const setPaneVisibility = useStore((state) => state.setPaneVisibility);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setPaneVisibility('code', !paneVisibility.code)}
        className={`link-button text-sm ${!paneVisibility.code ? 'opacity-50' : ''}`}
        title={paneVisibility.code ? 'Hide code editor' : 'Show code editor'}
      >
        {paneVisibility.code ? '👁' : '👁‍🗨'} Code
      </button>

      <button
        onClick={() => setPaneVisibility('preview', !paneVisibility.preview)}
        className={`link-button text-sm ${!paneVisibility.preview ? 'opacity-50' : ''}`}
        title={paneVisibility.preview ? 'Hide preview' : 'Show preview'}
      >
        {paneVisibility.preview ? '👁' : '👁‍🗨'} Preview
      </button>
    </div>
  );
};
