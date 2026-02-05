export interface Problem {
  id: string;
  topicId: string;
  title: string;
  description: string;
  instructions: string;
  initialHTML: string;
  initialCSS?: string;
  solutionCSS?: string;
}

export type LayoutMode = 'horizontal' | 'vertical';

export interface PaneVisibility {
  code: boolean;
  preview: boolean;
}
