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
    payload: eraseZero(operation)
  };
}

export const addHistory = (operation) => {
  return {
    type: 'ADD_HISTORY',
    operation: operation,
    result: eraseZero(operation)
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

// Fonctions

const eraseZero = (operation) => {
  let operationArray = operation.split('');
  for (let i = 0; i < operationArray.length; i++) {
    if ((operationArray[0] === '0') && (i+1 !== '0')) {
      operationArray.splice(i, 1);
    }
    else if ((operationArray[i-1] === '+' || operationArray[i-1] === '-' || operationArray[i-1] === '/' || operationArray[i-1] === '*' ) && (operationArray[i] === '0')) {
      operationArray.splice(i, 1);
    }
  }
  operation = operationArray.join("").toString("");
  return (Math.round(eval(operation)));
}