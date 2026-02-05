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

  // Calculate height: full viewport minus header, controls, nav, and padding
  const containerStyle = {
    height: 'calc(100vh - 400px)',
    minHeight: '500px',
  };

  // If both hidden, show both (fallback)
  if (!showCode && !showPreview) {
    return (
      <div
        className={`flex gap-4 ${isHorizontal ? 'flex-row' : 'flex-col'}`}
        style={containerStyle}
      >
        <div className="flex-1">{codePane}</div>
        <div className="flex-1">{previewPane}</div>
      </div>
    );
  }

  // Only code visible
  if (showCode && !showPreview) {
    return <div style={containerStyle}>{codePane}</div>;
  }

  // Only preview visible
  if (!showCode && showPreview) {
    return <div style={containerStyle}>{previewPane}</div>;
  }

  // Both visible
  return (
    <div
      className={`flex gap-4 ${isHorizontal ? 'flex-row' : 'flex-col'}`}
      style={containerStyle}
    >
      <div className="flex-1">{codePane}</div>
      <div className="flex-1">{previewPane}</div>
    </div>
  );
};
