import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { getProblem } from '../config/topics';
import { loadProblemFiles } from '../utils/problemLoader';
import { useStore } from '../store/useStore';
import { ProblemHeader } from './ProblemHeader';
import { SplitPane } from './SplitPane';
import { CodeEditor } from './CodeEditor';
import { PreviewPane } from './PreviewPane';
import { ProblemNav } from './ProblemNav';

interface ProblemViewProps {
  topicId: string;
  problemId: string;
}

export const ProblemView: React.FC<ProblemViewProps> = ({
  topicId,
  problemId,
}) => {
  const [, setLocation] = useLocation();
  const getCurrentProblemCSS = useStore((state) => state.getCurrentProblemCSS);
  const setCurrentProblemCSS = useStore((state) => state.setCurrentProblemCSS);

  const problemData = getProblem(problemId);
  const problem = problemData?.problem;

  const [html, setHtml] = useState<string>('');
  const [initialCSS, setInitialCSS] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize CSS from store or use initial CSS from loaded files
  const [css, setCss] = useState<string>('');

  // Load problem files when component mounts or problem changes
  useEffect(() => {
    if (!problem || !problemData) {
      setLoading(false);
      return;
    }

    setLoading(true);
    loadProblemFiles(problemData.topicId, problemId)
      .then((files) => {
        setHtml(files.html);
        setInitialCSS(files.css);

        // Check if there's stored CSS, otherwise use loaded initial CSS
        const storedCSS = getCurrentProblemCSS(topicId, problemId);
        setCss(storedCSS || files.css);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load problem files:', error);
        setLoading(false);
      });
  }, [problemId, topicId, problem, problemData, getCurrentProblemCSS]);

  // Update CSS in store when it changes (debounced to prevent excessive updates)
  useEffect(() => {
    if (!css) return;

    const timeoutId = setTimeout(() => {
      setCurrentProblemCSS(topicId, problemId, css);
    }, 500); // Debounce 500ms

    return () => clearTimeout(timeoutId);
  }, [css, topicId, problemId, setCurrentProblemCSS]);

  // Handle invalid problem
  if (!problem) {
    return (
      <div className="w-full max-w-6xl">
        <div className="bg-secondary border border-color rounded-md text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Problem Not Found
          </h1>
          <p className="text-base text-secondary mb-6">
            The problem you're looking for doesn't exist.
          </p>
          <button
            onClick={() => setLocation('/')}
            className="px-6 py-3 bg-accent border border-color rounded-md text-primary font-medium cursor-pointer"
          >
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  // Show loading state while files are being fetched
  if (loading) {
    return (
      <div className="w-full px-6 py-8 text-center">
        <p className="text-secondary">Loading problem...</p>
      </div>
    );
  }

  return (
    <div
      className="w-full"
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        height: '100vh',
        paddingTop: '',
        paddingBottom: '',
        gap: 'var(--space-4)',
      }}
    >
      <ProblemHeader
        topicId={topicId}
        problemId={problemId}
        title={problem.title}
        description={problem.description}
        instructions={problem.instructions}
      />

      <SplitPane
        codePane={<CodeEditor value={css} onChange={setCss} />}
        previewPane={<PreviewPane html={html} css={css} />}
      />

      <ProblemNav topicId={topicId} problemId={problemId} />
    </div>
  );
};
