import * as actionTypes from './actionTypes';

// Action creators

// Sync action called by async action when it is complete. Only sync actions can update the store.
const saveResult = (payload) => {
  return ({ type: actionTypes.STORE_RESULT, payload });
}

// Async action - Used to execute async code
export const storeResult = (payload) => {
  /* To run async code, return a function which redux-thunk gives access to dispatch action and redux-thunk
  * will execute the async code and then dispatch new action.
  */

  // getState is optional arguement we can pass in to rach out to the store prior to dispatching the success action
  return (dispatch, getState) => {
    // To simulate asychronous code
    setTimeout(() => {
      // ctr to access counter reducer as per rootReducer in index.js
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      // When async code has complete, reduc-thunk calls a new action creator
      dispatch(saveResult(payload));
    }, 2000)
  }
}
export const deleteResult = (payload) => ({ type: actionTypes.DELETE_RESULT, payload });