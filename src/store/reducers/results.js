import * as actions from '../actions/actionTypes';
import { updateObject } from '../utlitity';

const initialState = {
  results: []
}

const storeResult = (state, action) => {
  return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.payload }) })
}

const deleteResult = (state, action) => {
  const updatedResults = state.results.filter(result => result.id !== action.payload );
  return updateObject(state, { results: updatedResults })
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actions.STORE_RESULT:
      return storeResult(state, action)
    case actions.DELETE_RESULT:
      return deleteResult(state, action)
    default:
      return state;
  }
}

export default reducer;