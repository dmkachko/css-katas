import React from 'react';
import { useStore } from '../store/useStore';

interface SplitPaneProps {
  codePane: React.ReactNode;
  previewPane: React.ReactNode;
}

export const SplitPane: React.FC<SplitPaneProps> = ({ codePane, previewPane }) => {
  const { code, preview } = useStore((state) => state.paneVisibility);

  // Fallback: show both if both are hidden
  const showCode = code || (!code && !preview);
  const showPreview = preview || (!code && !preview);

  return (
    <div className="split-pane-container flex flex-row gap-4 px-4">
      {showCode && <div className="flex-1">{codePane}</div>}
      {showPreview && <div className="flex-1">{previewPane}</div>}
    </div>
  );
};
