import * as React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.hydrate(
  <React.StrictMode>
    <Header />
    <Subheader />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals('onPerfEntry');
