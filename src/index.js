import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router } from "react-router-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");

// Render
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
