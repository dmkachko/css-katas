import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, ProgressStore, LayoutMode, PaneVisibility } from '../types';

interface StoreState extends ProgressStore {
  theme: Theme;
  layoutPreference: LayoutMode;
  paneVisibility: PaneVisibility;
  currentProblemCSS: Record<string, string>;

  // Actions
  markProblemComplete: (topicId: string, problemId: string) => void;
  markProblemIncomplete: (topicId: string, problemId: string) => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setLayoutPreference: (layout: LayoutMode) => void;
  setPaneVisibility: (pane: 'code' | 'preview', visible: boolean) => void;
  setCurrentProblemCSS: (topicId: string, problemId: string, css: string) => void;
  getCurrentProblemCSS: (topicId: string, problemId: string) => string | undefined;
  clearCurrentProblemCSS: (topicId: string, problemId: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Initial state
      completedProblems: {},
      theme: 'light',
      layoutPreference: 'horizontal',
      paneVisibility: { code: true, preview: true },
      currentProblemCSS: {},

      // Actions
      markProblemComplete: (topicId, problemId) =>
        set((state) => {
          const current = state.completedProblems[topicId] || [];
          if (current.includes(problemId)) return state;

          return {
            completedProblems: {
              ...state.completedProblems,
              [topicId]: [...current, problemId],
            },
          };
        }),

      markProblemIncomplete: (topicId, problemId) =>
        set((state) => ({
          completedProblems: {
            ...state.completedProblems,
            [topicId]: (state.completedProblems[topicId] || []).filter(
              (id) => id !== problemId
            ),
          },
        })),

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setTheme: (theme) => set({ theme }),

      setLayoutPreference: (layout) => set({ layoutPreference: layout }),

      setPaneVisibility: (pane, visible) =>
        set((state) => ({
          paneVisibility: {
            ...state.paneVisibility,
            [pane]: visible,
          },
        })),

      setCurrentProblemCSS: (topicId, problemId, css) =>
        set((state) => ({
          currentProblemCSS: {
            ...state.currentProblemCSS,
            [`${topicId}-${problemId}`]: css,
          },
        })),

      getCurrentProblemCSS: (topicId, problemId) => {
        return get().currentProblemCSS[`${topicId}-${problemId}`];
      },

      clearCurrentProblemCSS: (topicId, problemId) =>
        set((state) => {
          const newCSS = { ...state.currentProblemCSS };
          delete newCSS[`${topicId}-${problemId}`];
          return { currentProblemCSS: newCSS };
        }),
    }),
    {
      name: 'css-katas-storage',
      partialize: (state) => ({
        completedProblems: state.completedProblems,
        theme: state.theme,
        layoutPreference: state.layoutPreference,
        paneVisibility: state.paneVisibility,
      }),
    }
  )
);
