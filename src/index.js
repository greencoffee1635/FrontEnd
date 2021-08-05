import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/configureStore";

import { Provider } from "react-redux";
// redux-persist
import { store, persistor } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import App from "./shared/App";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <GlobalStyle />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
