import React from 'react';
import { useStore } from '../store/useStore';

interface SplitPaneProps {
  codePane: React.ReactNode;
  previewPane: React.ReactNode;
}

export const SplitPane: React.FC<SplitPaneProps> = ({ codePane, previewPane }) => {
  const paneVisibility = useStore((state) => state.paneVisibility);

  const showCode = paneVisibility.code;
  const showPreview = paneVisibility.preview;

  const containerStyle = {
    height: '100%',
    minHeight: '400px',
  };

  // If both hidden, show both (fallback)
  if (!showCode && !showPreview) {
    return (
      <div className="flex flex-row gap-4" style={containerStyle}>
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

  // Both visible - always vertical layout
  return (
    <div className="flex flex-row gap-4" style={containerStyle}>
      <div className="flex-1">{codePane}</div>
      <div className="flex-1">{previewPane}</div>
    </div>
  );
};
