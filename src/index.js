import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page1 from './page1';
import PwdGenerator from './components/PwdGenerator';
import Signup from './Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> // component render twice bcz of strictmode
  //   <App />
  // </React.StrictMode>
  // <App />
    // <Page1/>
    // <PwdGenerator/>
    <Signup/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
