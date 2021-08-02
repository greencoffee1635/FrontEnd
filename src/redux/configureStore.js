import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// reducer
import detailSlice from "./modules/detailSlice";

export const history = createBrowserHistory();

const reducer = combineReducers({
  detail: detailSlice.reducer,
  router: connectRouter(history),
});

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer,
  middlewares: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
