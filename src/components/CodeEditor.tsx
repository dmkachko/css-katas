import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import { useStore } from '../store/useStore';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange }) => {
  const theme = useStore((state) => state.theme);

  return (
    <div className="w-full h-full border border-color rounded-md overflow-hidden">
      <CodeMirror
        value={value}
        height="100%"
        minHeight="400px"
        extensions={[css()]}
        theme={theme === 'dark' ? oneDark : 'light'}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: true,
        }}
      />
    </div>
  );
};
