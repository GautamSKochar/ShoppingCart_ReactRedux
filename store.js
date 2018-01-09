import { createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import eShopReducer from './reducers/eShopReducer';
import { loadState, saveState } from './localStorage';

let middleware = applyMiddleware(logger, thunk, promise());

if(process.env.NODE_ENV!=='production'){
    middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension())
}
const persistedState = loadState();
export default createStore(
    combineReducers({
        eShopReducer
    }), {}, middleware
);
