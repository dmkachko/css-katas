import React from 'react';
import { useStore } from '../store/useStore';

export const ProblemControls: React.FC = () => {
  const paneVisibility = useStore((state) => state.paneVisibility);
  const setPaneVisibility = useStore((state) => state.setPaneVisibility);

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => setPaneVisibility('code', !paneVisibility.code)}
        className="px-4 py-2 bg-secondary border border-color rounded-md text-secondary font-medium cursor-pointer transition"
        title={paneVisibility.code ? 'Hide code editor' : 'Show code editor'}
        style={{
          transition: 'all var(--transition-base)',
          opacity: paneVisibility.code ? 1 : 0.6,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        {paneVisibility.code ? '👁 Code' : '👁‍🗨 Code'}
      </button>

      <button
        onClick={() => setPaneVisibility('preview', !paneVisibility.preview)}
        className="px-4 py-2 bg-secondary border border-color rounded-md text-secondary font-medium cursor-pointer transition"
        title={paneVisibility.preview ? 'Hide preview' : 'Show preview'}
        style={{
          transition: 'all var(--transition-base)',
          opacity: paneVisibility.preview ? 1 : 0.6,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        {paneVisibility.preview ? '👁 Preview' : '👁‍🗨 Preview'}
      </button>
    </div>
  );
};
