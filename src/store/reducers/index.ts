import { combineReducers } from 'redux';
import todosReducer from './agencyReducer';

const reducers = combineReducers({
  products: todosReducer,
});

export default reducers

export type State = ReturnType<typeof reducers>