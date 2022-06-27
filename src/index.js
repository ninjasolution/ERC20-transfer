import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/css/slick.css"
import "./assets/css/vendor/bootstrap.min.css"
import "./assets/css/icofont.min.css"
import "./assets/css/animate.css"
import "./assets/css/nice-select.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/style.css"
import { Provider } from "react-redux"
import { store } from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
