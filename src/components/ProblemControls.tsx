import React from 'react';
import { useStore } from '../store/useStore';

export const ProblemControls: React.FC = () => {
  const paneVisibility = useStore((state) => state.paneVisibility);
  const setPaneVisibility = useStore((state) => state.setPaneVisibility);

  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={() => setPaneVisibility('code', !paneVisibility.code)}
        className="text-secondary text-sm cursor-pointer transition"
        title={paneVisibility.code ? 'Hide code editor' : 'Show code editor'}
        style={{
          transition: 'all var(--transition-base)',
          opacity: paneVisibility.code ? 1 : 0.5,
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
      >
        {paneVisibility.code ? '👁' : '👁‍🗨'} Code
      </button>

      <button
        onClick={() => setPaneVisibility('preview', !paneVisibility.preview)}
        className="text-secondary text-sm cursor-pointer transition"
        title={paneVisibility.preview ? 'Hide preview' : 'Show preview'}
        style={{
          transition: 'all var(--transition-base)',
          opacity: paneVisibility.preview ? 1 : 0.5,
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
      >
        {paneVisibility.preview ? '👁' : '👁‍🗨'} Preview
      </button>
    </div>
  );
};
