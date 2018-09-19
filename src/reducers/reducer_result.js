let initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RESULT':
      return action.payload;
    case 'RESET':
      return '';
    default: return state;
  }
}