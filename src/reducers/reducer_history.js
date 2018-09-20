export default (state = [], action) => {
    switch(action.type) {
        
        case 'RESULT':
            return [
                ...state,
                {
                    operation: action.payload_operation,
                    result: action.payload_result
                }
            ]
        case 'RESET_ALL':
            return [];
    default: return state
    }
}