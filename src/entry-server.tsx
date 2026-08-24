import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export function render(url) {
  // We can't simply pass URL to App because App uses window.location.pathname.
  // We need to mock window.location before rendering.
  return renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
