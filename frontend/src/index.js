// Importing the necessary libraries and components
import "./index.css"; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Rendering the main App component into the root element of the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Using React's StrictMode for highlighting potential problems in the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


