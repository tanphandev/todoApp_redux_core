import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import RootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware()));
export default store;
