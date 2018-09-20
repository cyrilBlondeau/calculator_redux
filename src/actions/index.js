export const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    payload: number
  };
}

export const result = (operation) => {
  return {
    type: 'RESULT',
    payload: Math.round(eval(operation))
  };
}

export const reset = (result, operation) => {
  return {
    type: 'RESET',
  }
}