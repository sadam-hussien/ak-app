import {
  BACK_STEP,
  CREATE_DATASET,
  LOAD_FILES,
  NEXT_STEP,
  REMOVE_FILE,
  HANDLE_TAGS,
  DONE_TAGS,
} from "../types";

export default function dataReducer(state, action) {
  switch (action.type) {
    case CREATE_DATASET: {
      const data = {
        ...action.payload,
      };
      return {
        ...state,
        datasets: [data, ...state.datasets],
        ...data,
      };
    }
    case LOAD_FILES: {
      const handleFiles = action.payload.map((f) => {
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
      return {
        ...state,
        files: [...handleFiles, ...state.files],
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
    case HANDLE_TAGS: {
      const id = action.payload.id;
      const findFile = state.files.find((f) => f.id === id);
      const findFileIndex = state.files.findIndex((f) => f.id === id);
      const filterFiles = state.files.filter((f) => f.id !== id);
      filterFiles.splice(findFileIndex, 0, {
        ...findFile,
        tags: action.payload.tags,
      });
      return {
        ...state,
        files: [...filterFiles],
      };
    }
    case DONE_TAGS: {
      const filterItemsHasTags = state.files.filter((f) => f.tags);
      return {
        ...state,
        annotated: [...filterItemsHasTags, ...state.annotated],
      };
    }
    default: {
      return state;
    }
  }
}
