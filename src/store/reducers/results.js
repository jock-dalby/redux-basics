import * as actions from '../actions/actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch ( action.type ) {
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      }
    case actions.DELETE_RESULT:
      const updatedResults = state.res.results.filter(result => result.id !== action.id );
      return {
        ...state,
        results: updatedResults
      }
    default:
      return state;
  }
}

export default reducer;