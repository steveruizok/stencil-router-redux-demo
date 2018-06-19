import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/index";

const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, applyMiddleware(logger));

export { configureStore };
