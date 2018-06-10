import * as actions from '../actions/actionTypes';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch ( action.type ) {
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.payload })
      }
    case actions.DELETE_RESULT:
      const updatedResults = state.results.filter(result => result.id !== action.payload );
      return {
        ...state,
        results: updatedResults
      }
    default:
      return state;
  }
}

export default reducer;