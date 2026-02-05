import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, ProgressStore } from '../types';

interface StoreState extends ProgressStore {
  theme: Theme;

  // Actions
  markProblemComplete: (topicId: string, problemId: string) => void;
  markProblemIncomplete: (topicId: string, problemId: string) => void;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Initial state
      completedProblems: {},
      theme: 'light',

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
    }),
    {
      name: 'css-katas-storage',
      partialize: (state) => ({
        completedProblems: state.completedProblems,
        theme: state.theme,
      }),
    }
  )
);
