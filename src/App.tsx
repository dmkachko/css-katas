import React, { useEffect, Suspense } from 'react';
import { Route, Switch } from 'wouter';
import { useStore } from './store/useStore';
import { TopicList } from './components/TopicList';
import { ThemeToggle } from './components/ThemeToggle';

// Lazy load ProblemView for code splitting
const ProblemView = React.lazy(() =>
  import('./components/ProblemView').then((module) => ({
    default: module.ProblemView,
  }))
);

export const App: React.FC = () => {
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  // Initialize theme from OS preference if not set
  useEffect(() => {
    if (!theme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, [theme, setTheme]);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-primary">
      <ThemeToggle />
      <Switch>
        <Route path="/" component={TopicList} />
        <Route path="/topic/:topicId/:problemId">
          {(params) => (
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="text-xl text-secondary">Loading...</div>
                </div>
              }
            >
              <ProblemView topicId={params.topicId} problemId={params.problemId} />
            </Suspense>
          )}
        </Route>
        <Route>
          <TopicList />
        </Route>
      </Switch>
    </div>
  );
};
