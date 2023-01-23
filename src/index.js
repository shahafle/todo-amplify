import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
//SCSS
import './assets/styles/main.scss'
//CMPS
import App from './App';

import config from './aws-exports.js'
Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);