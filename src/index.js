import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Footer, Navbar } from "./Layout";
import MainSection from "./MainSection";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

const rootElement = document.getElementById("root");

// Render
ReactDOM.render(
  <StrictMode>
    <Navbar appName="Movies App" />
    <MainSection />
    <Footer />
  </StrictMode>,
  rootElement
);
