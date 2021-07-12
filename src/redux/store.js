import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import index from './reducer/index';
let middleware = [thunkMiddleware];

const store = createStore(index,applyMiddleware(...middleware));

export default store;