import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
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

const store = createStore(rootReducer)

/**
 * Provider is a helper component which allows us to inject the store into the react components
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
