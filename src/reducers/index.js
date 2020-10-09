import { combineReducers } from 'redux';
import userReducer, { userInitialState } from './user';
import * as types from '../types/user';


export const initialState = {
  user: userInitialState
};

const reducers = combineReducers({
  user: userReducer,
});


const rootReducer = (state = initialState, action) => {
  if (action.type === types.USER_LOGOUT) {
    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;