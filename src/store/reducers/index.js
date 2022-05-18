import { TOGGLE_MODAL } from "../types";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import modelReducer from "./modelReducer";

export default function globalReducer(state, action) {
  switch (action.type) {
    case TOGGLE_MODAL: {
      return {
        ...state,
        modalStatus: {
          ...state.modalStatus,
          isActive: !state.modalStatus.isActive,
          ...action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export { authReducer, dataReducer, modelReducer };
