import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const history = createBrowserHistory();

const reducer = combineReducers({

  // startDate: startDate.reducer,
  // category: category.reducer,
  // areaCode: areaCode.reducer,
  // lat: lat.reducer,
  // lng: lng.reducer,
  // contenttypeid: contenttypeid.reducer,
  router: connectRouter(history),
});

const persistConfig={
  key: "root",
 
};

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
