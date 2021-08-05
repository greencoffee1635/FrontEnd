import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/configureStore";
import App from "./shared/App";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore(store);


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
