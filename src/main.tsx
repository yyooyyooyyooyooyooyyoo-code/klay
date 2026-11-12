import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';
// These page stylesheets are fully scoped (.contact-page / .cost-page). They are bundled with the
// main stylesheet on purpose: imported from the lazy page chunks they arrived only after the page
// JavaScript, so the prerendered HTML first painted unstyled and then jumped (large layout shift).
import './pages/ContactPage.css';
import './pages/CostCalculatorPage.css';

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
