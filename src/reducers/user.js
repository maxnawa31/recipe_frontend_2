import * as types from "../types/user";

export const userInitialState = {
  details: {},
  jwt: null,
  recipes: [],
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.USER_SET_DETAILS: {
      const { details } = action;
      return { ...state, details };
    }
    case types.USER_SET_RECIPES: {
      const { recipes } = action;
      return { ...state, recipes };
    }
    case types.USER_SET_JWT: {
      const { jwt } = action;
      return { ...state, jwt };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
