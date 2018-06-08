import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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

const store = createStore(rootReducer, applyMiddleware(logger))

/**
 * Provider is a helper component which allows us to inject the store into the react components
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
