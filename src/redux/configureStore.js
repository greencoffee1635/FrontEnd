import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";

// redux-persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// => localStorage에 저장!

// reducers
import option from "./modules/option";

export const history = createBrowserHistory();

const middlewares = [
  thunk.withExtraArgument({
    history,
  }),
];
 
const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
//  persist
const persistConfig = {
  key: "root",
  storage
};

const reducer = combineReducers({
  option: option,
  router: connectRouter(history),
});

// persist
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({ reducer: persistedReducer, middleware: middlewares });
export const persistor = persistStore(store);
export default { store, persistor };