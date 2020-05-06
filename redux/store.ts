import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

import thunk from "redux-thunk";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = (): any => {
  return createStore(rootReducer, enhancer);
};

export default store;
