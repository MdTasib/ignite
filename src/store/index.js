// REDUX STORE
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducers,
	composeEnchancer(applyMiddleware(thunk))
);

export default store;
