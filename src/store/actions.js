import {
  CREATE_DATASET,
  LOG_IN,
  LOG_OUT,
  TOGGLE_MODAL,
  NEXT_STEP,
  BACK_STEP,
  LOAD_FILES,
  REMOVE_FILE,
  EDIT_TAGS,
  HANDLE_TAGS,
  DONE_TAGS,
  FINISH_DATASET,
  RESET_DATASET,
  SPLIT_DATA,
  CREATE_MODEL,
  LOAD_MODELS_Files,
} from "./types";

export function action_login(data) {
  return {
    type: LOG_IN,
    payload: data,
  };
}

export function action_logout() {
  return {
    type: LOG_OUT,
  };
}

export function action_toggle_modal(data) {
  return {
    type: TOGGLE_MODAL,
    payload: data,
  };
}

export function action_create_dataset(data) {
  return {
    type: CREATE_DATASET,
    payload: data,
  };
}

export function action_load_files(files) {
  return {
    type: LOAD_FILES,
    payload: files,
  };
}

export function action_next_step(step) {
  return {
    type: NEXT_STEP,
    payload: step,
  };
}

export function action_back_step(step) {
  return {
    type: BACK_STEP,
    payload: step,
  };
}

export function action_remove_file(id) {
  return {
    type: REMOVE_FILE,
    payload: id,
  };
}

export function action_handle_tags(data) {
  return {
    type: HANDLE_TAGS,
    payload: data,
  };
}

export function action_done_tags() {
  return {
    type: DONE_TAGS,
  };
}

export function action_edit_tags() {
  return {
    type: EDIT_TAGS,
  };
}

export function action_finish_dataset(data) {
  return {
    type: FINISH_DATASET,
    payload: data,
  };
}

export function action_reset_dataset() {
  return {
    type: RESET_DATASET,
  };
}

export function action_split_data(data) {
  return {
    type: SPLIT_DATA,
    payload: data,
  };
}

// model
export function action_create_model(data) {
  return {
    type: CREATE_MODEL,
    payload: data,
  };
}

export function action_model_load_files(files) {
  return {
    type: LOAD_MODELS_Files,
    payload: files,
  };
}
