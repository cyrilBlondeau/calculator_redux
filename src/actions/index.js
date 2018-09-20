export const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    payload: number
  };
}

export const result = (operation) => {
  return {
    type: 'RESULT',
    payload_result: Math.round(eval(operation)),
    payload_operation: operation
  };
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}

export const resetAll = () => {
  return {
    type: 'RESET_ALL',
  }
}