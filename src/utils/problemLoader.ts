/**
 * Utility functions to load problem files from public/problems/ directory
 */

export interface ProblemFiles {
  html: string;
  css: string;
  solutionCSS?: string;
}

/**
 * Loads HTML, CSS, and optional solution CSS for a problem
 * @param topicId - The topic ID (e.g., 'flexbox-basics')
 * @param problemId - The problem ID (e.g., 'flex-1')
 * @returns Promise resolving to problem files
 */
export async function loadProblemFiles(topicId: string, problemId: string): Promise<ProblemFiles> {
  const basePath = `${import.meta.env.BASE_URL}problems/${topicId}`;

  const [html, css, solutionCSS] = await Promise.all([
    fetch(`${basePath}/${problemId}.html`).then((r) => (r.ok ? r.text() : '')),
    fetch(`${basePath}/${problemId}.css`).then((r) => (r.ok ? r.text() : '')),
    fetch(`${basePath}/${problemId}-solution.css`).then((r) => (r.ok ? r.text() : undefined)),
  ]);

  return { html, css, solutionCSS };
}

/**
 * Loads HTML file for a problem
 */
export async function loadProblemHTML(topicId: string, problemId: string): Promise<string> {
  const response = await fetch(`${import.meta.env.BASE_URL}problems/${topicId}/${problemId}.html`);
  return response.ok ? response.text() : '';
}

/**
 * Loads CSS file for a problem
 */
export async function loadProblemCSS(topicId: string, problemId: string): Promise<string> {
  const response = await fetch(`${import.meta.env.BASE_URL}problems/${topicId}/${problemId}.css`);
  return response.ok ? response.text() : '';
}

/**
 * Loads solution CSS file for a problem (if exists)
 */
export async function loadProblemSolution(topicId: string, problemId: string): Promise<string | undefined> {
  const response = await fetch(`${import.meta.env.BASE_URL}problems/${topicId}/${problemId}-solution.css`);
  return response.ok ? response.text() : undefined;
}
