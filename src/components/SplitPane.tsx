import React from 'react';
import { useStore } from '../store/useStore';

interface SplitPaneProps {
  codePane: React.ReactNode;
  previewPane: React.ReactNode;
}

export const SplitPane: React.FC<SplitPaneProps> = ({ codePane, previewPane }) => {
  const layoutPreference = useStore((state) => state.layoutPreference);
  const paneVisibility = useStore((state) => state.paneVisibility);

  const isHorizontal = layoutPreference === 'horizontal';
  const showCode = paneVisibility.code;
  const showPreview = paneVisibility.preview;

  // If both hidden, show both (fallback)
  if (!showCode && !showPreview) {
    return (
      <div
        className={`flex gap-4 ${isHorizontal ? 'flex-row' : 'flex-col'}`}
        style={{ height: '600px' }}
      >
        <div className="flex-1">{codePane}</div>
        <div className="flex-1">{previewPane}</div>
      </div>
    );
  }

  // Only code visible
  if (showCode && !showPreview) {
    return <div style={{ height: '600px' }}>{codePane}</div>;
  }

  // Only preview visible
  if (!showCode && showPreview) {
    return <div style={{ height: '600px' }}>{previewPane}</div>;
  }

  // Both visible
  return (
    <div
      className={`flex gap-4 ${isHorizontal ? 'flex-row' : 'flex-col'}`}
      style={{ height: '600px' }}
    >
      <div className="flex-1">{codePane}</div>
      <div className="flex-1">{previewPane}</div>
    </div>
  );
};
