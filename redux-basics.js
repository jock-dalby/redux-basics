const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  name: 'Jock'
};

/*
 * REDUCER
 * - The only thing that may update state
 * - Just a function that takes in current state and an action
 */
const rootReducer = (state = initialState, action) => {
  return state;
}

// Store => Must be initialised with reducer
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatch action

// Subscription