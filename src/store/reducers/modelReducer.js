import { CREATE_MODEL, LOAD_MODELS_Files } from "../types";

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
      console.log(action.payload);
      const handleFiles = action.payload.map((f) => {
        return {
          ...f,
          file: f.file,
          filename: f.filename,
          id: f.id,
          fileType: f.fileType,
          fileSize: f.fileSize,
          fileExtension: f.fileExtension,
          filenameWithoutExtension: f.filenameWithoutExtension,
        };
      });
      return {
        ...state,
        models: [...handleFiles, ...state.models],
      };
    }
    default: {
      return state;
    }
  }
}
