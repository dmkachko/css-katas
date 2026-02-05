export interface Problem {
  id: string;
  title: string;
  description: string;
  instructions: string;
  // Files loaded dynamically from public/problems/{topicId}/{id}.html
  // Optional solution file: {id}-solution.css
}

export type LayoutMode = 'horizontal' | 'vertical';

export interface PaneVisibility {
  code: boolean;
  preview: boolean;
}
