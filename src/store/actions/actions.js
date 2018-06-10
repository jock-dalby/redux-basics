// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TO = 'ADD_TO';
export const SUBTRACT_FROM = 'SUBTRACT_FROM';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const addTo = (payload) => ({ type: ADD_TO, payload });
export const subtractFrom = (payload) => ({ type: SUBTRACT_FROM, payload });

// Sync action called by async action when it is complete. Only sync actions can update the store.
export const saveResult = (payload) => {
  return ({ type: STORE_RESULT, payload });
}

// Async action - Used to execute async code
export const storeResult = (payload) => {
  /* To run async code, return a function which redux-thunk gives access to dispatch action and redux-thunk
  * will execute the async code and then dispatch new action.
  */
  return dispatch => {
    // To simulate asychronous code
    setTimeout(() => {
      // When async code has complete, reduc-thunk calls a new action creator
      dispatch(saveResult(payload));
    }, 2000)
  }
}
export const deleteResult = (payload) => ({ type: DELETE_RESULT, payload });