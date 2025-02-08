import { scan } from 'react-scan'; // import this BEFORE react


import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import './index.css';


if (typeof window !== 'undefined') {
  scan({
    enabled: true,
    log: true, // logs render info to console (default: false)
  });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
