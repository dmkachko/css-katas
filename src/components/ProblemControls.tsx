import React from 'react';
import { useStore } from '../store/useStore';

export const ProblemControls: React.FC = () => {
  const paneVisibility = useStore((state) => state.paneVisibility);
  const setPaneVisibility = useStore((state) => state.setPaneVisibility);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setPaneVisibility('code', !paneVisibility.code)}
        className="link-button text-sm"
        title={paneVisibility.code ? 'Hide code editor' : 'Show code editor'}
        style={{ opacity: paneVisibility.code ? 1 : 0.5 }}
      >
        {paneVisibility.code ? '👁' : '👁‍🗨'} Code
      </button>

      <button
        onClick={() => setPaneVisibility('preview', !paneVisibility.preview)}
        className="link-button text-sm"
        title={paneVisibility.preview ? 'Hide preview' : 'Show preview'}
        style={{ opacity: paneVisibility.preview ? 1 : 0.5 }}
      >
        {paneVisibility.preview ? '👁' : '👁‍🗨'} Preview
      </button>
    </div>
  );
};
