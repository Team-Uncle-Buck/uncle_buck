import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/cormorant/Cormorant-Regular.ttf';
import './fonts/cormorant/Cormorant-Medium.ttf';
import './fonts/cormorant/Cormorant-Bold.ttf';
import './fonts/cormorant/Cormorant-SemiBold.ttf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
