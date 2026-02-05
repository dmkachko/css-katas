import React, { useEffect, useRef } from 'react';

interface PreviewPaneProps {
  html: string;
  css: string;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({ html, css }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const document = iframe.contentDocument;
    if (!document) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: system-ui, -apple-system, sans-serif;
              padding: 20px;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    document.open();
    document.write(content);
    document.close();
  }, [html, css]);

  return (
    <div className="w-full h-full bg-secondary border border-color rounded-md overflow-hidden">
      <iframe
        ref={iframeRef}
        title="Preview"
        sandbox="allow-same-origin"
        className="w-full h-full border-none"
      />
    </div>
  );
};
