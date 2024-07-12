import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IconCompare from './components/IconCompare/IconCompare';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IconCompare iconame='fa-heart'/>
    <IconCompare iconame='fa-scale-balanced'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
