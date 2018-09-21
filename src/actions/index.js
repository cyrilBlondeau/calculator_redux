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
  let operationArray = operation.split('');
  for (let i = 0; i < operationArray.length; i++) {
    if ((operationArray[i-1] === '+' || operationArray[i-1] === '-' || operationArray[i-1] === '/' || operationArray[i-1] === '*' ) && (operationArray[i] === '0')) {
      operationArray[i] = '1';
    }
  }
  operation = operationArray.join("").toString("");
  console.log(operation);
  let resultat = (Math.round(eval(operation)));
  return {
    type: 'RESULT',
    payload: resultat
  };
}

export const addHistory = (operation) => {
  let operationArray = operation.split('');
  for (let i = 0; i < operationArray.length; i++) {
    if ((operationArray[i-1] === '+' || operationArray[i-1] === '-' || operationArray[i-1] === '/' || operationArray[i-1] === '*' ) && (operationArray[i] === '0')) {
      operationArray[i] = '1';
    }
  }
  operation = operationArray.join("").toString("");
  console.log(operation);
  let resultat = (Math.round(eval(operation)));
  return {
    type: 'ADD_HISTORY',
    operation: operation,
    result: Math.round(eval(resultat))
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