import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// reducer
import detailSlice from "./modules/detailSlice";
import optionReducer from "./modules/option";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  detail: detailSlice.reducer,
  option: optionReducer,
  router: connectRouter(history),
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

// 지금 어떤 개발환경인지 확인
const env = process.env.NODE_ENV;

// 개발환경에서 logger 사용하기
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middlewares, ...getDefaultMiddleware()],
  devTools: env !== "production",
});
