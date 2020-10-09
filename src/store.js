import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import localForage from 'localforage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer, { initialState } from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const history = createHistory();

const middleware = applyMiddleware(thunk, routerMiddleware(history));

const enhancer = composeEnhancers(middleware);

const persistConfig = {
  key: 'root',
  storage: localForage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, initialState, enhancer);

export const persistor = persistStore(store);
console.log(persistor)
export default store;