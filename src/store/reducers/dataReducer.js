import {
  GET_DATASETS,
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
    case GET_DATASETS: {
      return {
        ...state,
        datasets: action.payload,
      };
    }
    case CREATE_DATASET: {
      return {
        ...state,
        createDataset: action.payload,
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
      return {
        ...state,
        files: [action.payload, ...state.files],
      };
    }
    case REMOVE_FILE: {
      const path = action.payload;
      const filterFiles = state.files.filter((file) => file.path !== path);

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
      const path = action.payload.path;
      const findFile = state.files.find((f) => f.path === path);
      const findFileIndex = state.files.findIndex((f) => f.path === path);
      const filterFiles = state.files.filter((f) => f.path !== path);
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
          const isExist = state.annotated.some((i) => i.path === f.path);
          if (isExist) {
            const findFile = state.annotated.find((i) => i.path === f.path);
            console.log("find file", findFile);
            const filterFiles = state.annotated.filter((i) => i.path == f.path);
            return [f, ...filterFiles];
          } else {
            return [f, ...state.annotated];
          }
        }
      });
      return {
        ...state,
        annotated: filterItemsHasTags,
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
        files: action.payload.files.length ? action.payload.files : null,
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
        createDataset: {},
      };
    }
    default: {
      return state;
    }
  }
}
