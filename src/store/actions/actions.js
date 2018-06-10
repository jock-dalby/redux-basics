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
export const storeResult = (payload) => ({ type: STORE_RESULT, payload });
export const deleteResult = (payload) => ({ type: DELETE_RESULT, payload });