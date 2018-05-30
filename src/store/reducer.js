import actions from './actions';

const initialState = {
  counter: 7
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    case actions.Increment.type:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actions.Decrement.type:
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD_TO':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case 'SUBTRACT_FROM':
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      return state;
  }
}

export default reducer;