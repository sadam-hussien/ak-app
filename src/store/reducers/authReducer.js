import { LOG_IN, LOG_OUT } from "../types";

export default function authReducer(state, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        auth: false,
        token: null,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}
