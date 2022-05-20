import {
  BACK_STEP,
  CREATE_DATASET,
  LOAD_FILES,
  NEXT_STEP,
  REMOVE_FILE,
  HANDLE_TAGS,
  DONE_TAGS,
  FINISH_DATASET,
  RESET_DATASET,
  SPLIT_DATA,
  EDIT_DATASET,
  FINISH_EDIT_DATASET,
} from "../types";

export default function dataReducer(state, action) {
  switch (action.type) {
    case CREATE_DATASET: {
      const data = {
        ...action.payload,
      };
      return {
        ...state,
        ...data,
      };
    }
    case EDIT_DATASET: {
      // 1 - files
      const files = action.payload.item.files || [];
      // 2 - annotated
      const annotated = action.payload.item.files
        ? action.payload.item.files.filter((f) => {
            if (f.tags) {
              return f;
            }
            return;
          })
        : [];
      // 3 - splitedData
      const splitedData = action.payload.item.splitData;

      return {
        ...state,
        files: files,
        annotated: annotated,
        splitData: splitedData,
        tag: action.payload.tag,
        name: action.payload.name,
        id: action.payload.id,
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
      const filterItemsHasTags = state.files.filter((f) => {
        if (f.tags) {
          const isExist = state.annotated.some((i) => i.id === f.id);
          if (!isExist) {
            return f;
          }
        }
      });
      return {
        ...state,
        annotated: [...filterItemsHasTags, ...state.annotated],
      };
    }
    case SPLIT_DATA: {
      return {
        ...state,
        splitData: {
          ...action.payload,
        },
      };
    }
    case FINISH_DATASET: {
      const data = action.payload;
      return {
        ...state,
        datasets: [data, ...state.datasets],
      };
    }
    case FINISH_EDIT_DATASET: {
      const { id } = action.payload;
      const findFile = state.files.find((f) => parseInt(f.id) === parseInt(id));
      const findItemIndex = state.datasets.findIndex(
        (i) => parseInt(i.id) === parseInt(id)
      );
      const filterItems = state.datasets.filter(
        (i) => parseInt(i.id) !== parseInt(id)
      );
      filterItems.splice(findItemIndex, 0, {
        ...findFile,
        ...action.payload,
      });
      return {
        ...state,
        datasets: filterItems,
      };
    }
    case RESET_DATASET: {
      return {
        ...state,
        active: 0,
        files: [],
        annotated: [],
        name: "",
        tag: "",
        splitData: {
          min: null,
          max: null,
        },
      };
    }
    default: {
      return state;
    }
  }
}
