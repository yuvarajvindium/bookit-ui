import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "./index.css";

<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
=======
const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> a9ec9091a3c02d02554780dd4c294a1a38a7e0ee
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
