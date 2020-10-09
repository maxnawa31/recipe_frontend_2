import * as types from '../types/user';

export const userInitialState = {
  details: {}
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.USER_SET_DETAILS: {
      const { details } = action;
      return { ...state, details };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;