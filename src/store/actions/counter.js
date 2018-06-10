import * as actionTypes from './actionTypes';

// Action creators
export const increment = () => ({ type: actionTypes.INCREMENT });
export const decrement = () => ({ type: actionTypes.DECREMENT });
export const addTo = (payload) => ({ type: actionTypes.ADD_TO, payload });
export const subtractFrom = (payload) => ({ type: actionTypes.SUBTRACT_FROM, payload });