import actions from './actions';

const initialState = {
  counter: 7
}

const reducer = (state = initialState, action) => {
  switch ( action ) {
    case actions.Increment:
        return {
          ...state,
          counter: state.counter + 1
        }
    case actions.Decrement:
        return {
          ...state,
          counter: state.counter - 1
        }
    case actions.AddTo:
        return {
          ...state,
          counter: state.counter + action.payload
        }
    case actions.SubtractFrom:
        return {
          ...state,
          counter: state.counter - action.payload
        }
  }
  return state;
}

export default reducer;