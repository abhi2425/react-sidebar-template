import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FeatureProvider } from "./Context/Context";
ReactDOM.render(
  <React.StrictMode>
    <FeatureProvider>
      <App />
    </FeatureProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
