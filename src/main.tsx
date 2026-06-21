import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n/config';
import { initSentry, SentryErrorBoundary } from './sentry';

initSentry();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <SentryErrorBoundary fallback={<div style={{ padding: 24, textAlign: 'center' }}>Something went wrong. Please reload.</div>}>
      <App />
    </SentryErrorBoundary>
  </React.StrictMode>
);