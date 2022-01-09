import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Axios from 'axios';
import reportWebVitals from './reportWebVitals';


const DATA = [
  { id:"id-0", firstName:"Jack", lastName:"Tom", superpower:"strong", dateBirth:"1986-07-01" },
  { id:"id-1", firstName:"Rick", lastName:"Mack", superpower:"quick", dateBirth:"1974-23-02" },
  { id:"id-2", firstName:"Tom", lastName:"Pack", superpower:"slow", dateBirth:"1975-02-05" },
];


ReactDOM.render(
  <React.StrictMode>
    <App astronautState={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
