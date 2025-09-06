import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { JobsProvider } from './context/JobsContext'; // لازم تعملي الملف ده

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <JobsProvider>
        <App />
      </JobsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

