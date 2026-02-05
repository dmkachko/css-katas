import React from 'react';
import { useStore } from '../store/useStore';

export const ThemeToggle: React.FC = () => {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      className="link-button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{ fontSize: '18px' }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};
