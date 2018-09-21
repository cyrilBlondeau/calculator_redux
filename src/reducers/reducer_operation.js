let initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NUMBER':
      return state + action.payload;
    case 'RESULT':
      return '';
    case 'RESET':
      return '';
    case 'RESET_ALL':
      return '';
    default: return state;
  }
}