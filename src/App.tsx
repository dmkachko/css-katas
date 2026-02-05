import React, { useEffect } from 'react';
import { useStore } from './store/useStore';
import { TopicList } from './components/TopicList';
import { ThemeToggle } from './components/ThemeToggle';

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
      <TopicList />
    </div>
  );
};
