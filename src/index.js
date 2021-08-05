import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/configureStore";

import App from "./shared/App";

import GlobalStyle from "./shared/GlobalStyle";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
