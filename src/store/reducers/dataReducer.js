import {
  BACK_STEP,
  CREATE_DATASET,
  LOAD_FILES,
  LOAD_MORE_FILES,
  NEXT_STEP,
  REMOVE_FILE,
} from "../types";

export default function dataReducer(state, action) {
  switch (action.type) {
    case CREATE_DATASET: {
      return {
        ...state,
        name: action.payload.name,
        tag: action.payload.tag,
      };
    }
    case LOAD_FILES: {
      return {
        ...state,
        files: [...action.payload, ...state.files],
      };
    }
    case REMOVE_FILE: {
      const id = action.payload;
      const filterFiles = state.files.filter((file) => file.id !== id);
      return {
        ...state,
        files: filterFiles,
      };
    }
    case NEXT_STEP: {
      return {
        ...state,
        active: action.payload ? action.payload : state.active++,
      };
    }

    case BACK_STEP: {
      return {
        ...state,
        active: action.payload ? action.payload : state.active--,
      };
    }
    default: {
      return state;
    }
  }
}
