import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancer = compose;

let store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

window.store = store;

export default store;
