import { CREATE_MODEL, LOAD_MODELS_Files, RESET_MODEL_FILES } from "../types";

export default function modelReducer(state, action) {
  switch (action.type) {
    case CREATE_MODEL: {
      const data = {
        ...action.payload,
      };
      return {
        ...state,
        models: [data, ...state.models],
      };
    }
    case LOAD_MODELS_Files: {
      const handleFiles = action.payload.data.map((f) => {
        return {
          file: f.file,
          filename: f.filename,
          id: f.id,
          fileType: f.fileType,
          fileSize: f.fileSize,
          fileExtension: f.fileExtension,
          filenameWithoutExtension: f.filenameWithoutExtension,
        };
      });

      // get file
      const findItem = [...state.models].find(
        (i) => parseInt(i.id) === parseInt(action.payload.id)
      );

      const filterItems = [...state.models].filter(
        (i) => parseInt(i.id) !== parseInt(action.payload.id)
      );

      const newItem = { ...findItem, files: handleFiles };

      return {
        ...state,
        models: [newItem, ...filterItems],
      };
    }

    case RESET_MODEL_FILES: {
      // get file
      const findItem = [...state.models].find(
        (i) => parseInt(i.id) === parseInt(action.payload)
      );

      const filterItems = [...state.models].filter(
        (i) => parseInt(i.id) !== parseInt(action.payload)
      );

      const newItem = { ...findItem, files: null };
      return {
        ...state,
        models: [newItem, ...filterItems],
      };
    }
    default: {
      return state;
    }
  }
}
