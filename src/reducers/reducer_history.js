export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_HISTORY':
            return [
                ...state,
                {
                    operation: action.operation,
                    result: action.result
                }
            ]
        case 'RESET_ALL':
            return [];
    default: return state
    }
}