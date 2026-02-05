import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { getProblem } from '../config/problems';
import { useStore } from '../store/useStore';
import { ProblemHeader } from './ProblemHeader';
import { ProblemControls } from './ProblemControls';
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

  const problem = getProblem(problemId);

  // Initialize CSS from store or use initial CSS from problem
  const [css, setCss] = useState<string>(() => {
    const storedCSS = getCurrentProblemCSS(topicId, problemId);
    return storedCSS || problem?.initialCSS || '';
  });

  // Update CSS in store when it changes
  useEffect(() => {
    setCurrentProblemCSS(topicId, problemId, css);
  }, [css, topicId, problemId, setCurrentProblemCSS]);

  // Reset CSS when problem changes
  useEffect(() => {
    const storedCSS = getCurrentProblemCSS(topicId, problemId);
    const newCSS = storedCSS || problem?.initialCSS || '';
    setCss(newCSS);
  }, [topicId, problemId, problem, getCurrentProblemCSS]);

  // Handle invalid problem
  if (!problem) {
    return (
      <div className="w-full max-w-6xl mx-auto py-8 px-6">
        <div className="bg-secondary border border-color rounded-md p-8 text-center">
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

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-6">
      <ProblemHeader
        topicId={topicId}
        problemId={problemId}
        title={problem.title}
        description={problem.description}
        instructions={problem.instructions}
      />

      <ProblemControls />

      <SplitPane
        codePane={<CodeEditor value={css} onChange={setCss} />}
        previewPane={<PreviewPane html={problem.initialHTML} css={css} />}
      />

      <ProblemNav topicId={topicId} problemId={problemId} />
    </div>
  );
};
