import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './app/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Expected the application root element to exist.');
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement.dataset.prerendered === 'true') {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
