import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";

import optionReducer from "./reducer/optionReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
const persistConfig = {
  key: "root",
  storage
};

const reducer = combineReducers({
  option: optionReducer,
  // router: connectRouter(history),
});
const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  devTools: env !== "production",
});
