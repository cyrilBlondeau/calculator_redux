import { combineReducers } from 'redux';
import NumbersReducer from './reducer_numbers';
import Operation from './reducer_operation';
import Result from './reducer_result';
import History from './reducer_history';

const rootReducer = combineReducers({
  numbers: NumbersReducer,
  operation: Operation,
  result: Result,
  history: History,
});

export default rootReducer;