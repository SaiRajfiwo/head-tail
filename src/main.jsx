// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
