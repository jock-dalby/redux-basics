const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

/*
 * REDUCER
 * - The only thing that may update state.
 * - Just a function that takes in current state and an action.
 */
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type === 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

/**
 * STORE
 * - Must be initialised with reducer.
 */
const store = createStore(rootReducer);
console.log('Before actions are dispatched', store.getState());

/*
 * DISPATCH ACTION
 * - Action is JS object, MUST have type prop.
 * - Payload (and other props) can be named however.
 */
store.dispatch({type: 'INCREMENT_COUNTER'});
console.log('After INCREMENT_COUNTER action is dispatched', store.getState());

store.dispatch({type: 'ADD_COUNTER', value: 10 });
console.log('After ADD_COUNTER action is dispatched', store.getState());

// Subscription