import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");

// Render
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
