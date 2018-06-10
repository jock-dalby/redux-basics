import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// Allows us to connect redux to our react application
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
})

// Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching:', action);
      // next(action) lets the action continue to the reducer.
      // Theoreticaly you could change or cancel the action at this point
      next(action);
      // now the action has been passed on to the reducer the state is updated
      console.log('[middleWare] Next state', store.getState())
    }
  }
}

/*
 * If redux devtools cannot be found, we fall back to a default compose function
 * provided by redux: 'compose' allows us to combine enhancers
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logger, thunk))
)

/**
 * Provider is a helper component which allows us to inject the store into the react components
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
