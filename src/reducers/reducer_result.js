let initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RESULT':
      return action.payload;
    case 'ADD_NUMBER':
      return '';
    case 'RESET':
      return '';
    case 'RESET_ALL':
      return '';
    default: return state;
  }
}