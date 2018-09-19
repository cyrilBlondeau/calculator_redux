let initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NUMBER':
      return state + action.payload;
    default: return state;
  }
}