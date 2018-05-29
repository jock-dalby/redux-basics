const actions = {
  Increment: { type: 'INCREMENT'},
  Decrement: { type: 'DECREMENT'},
  AddTo: { type: 'ADD_TO', payload: 5},
  SubtractFrom: { type: 'SUBTRACT_FROM', payload: 5},
}

export default actions;