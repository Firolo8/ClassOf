import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// The entry point for the application.  It renders the root React
// component into the DOM.  StrictMode helps highlight potential
// problems in your application during development.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
