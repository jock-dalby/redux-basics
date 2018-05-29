import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// Allows us to connect redux to our react application
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const store = createStore(reducer)

/**
 * Provider is a helper component which allows us to inject the store into the react components
 * */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();
