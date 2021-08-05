import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

// reducer
import detailSlice from "./modules/detailSlice";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  detail: detailSlice.reducer,
  router: connectRouter(history),
});

const middlewares = [];

// 지금 어떤 개발환경인지 확인
const env = process.env.NODE_ENV;

// 개발환경에서 logger 사용하기
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
