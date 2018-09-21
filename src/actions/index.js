export const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    payload: number
  };
}

export const deleteNumber = () => {
  return {
    type: 'DELETE',
  };
}

export const result = (operation) => {
  return {
    type: 'RESULT',
    payload: Math.round(eval(operation))
  };
}

export const addHistory = (operation) => {
  return {
    type: 'ADD_HISTORY',
    operation: operation,
    result: Math.round(eval(operation))
  }
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