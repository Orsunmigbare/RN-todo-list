import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const storeEnhancers =  compose;

export const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));