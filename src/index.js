import React from "react";
import ReactDOM from "react-dom";

import App from "./shared/App";

import GlobalStyle from "./shared/GlobalStyle";

ReactDOM.render(
  // <React.StrictMode>
  <>
    <App />
    <GlobalStyle />
  </>,
  // </React.StrictMode>,
  document.getElementById("root")
);
