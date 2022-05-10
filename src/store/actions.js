import {
  CREATE_DATASET,
  LOG_IN,
  LOG_OUT,
  TOGGLE_MODAL,
  NEXT_STEP,
  BACK_STEP,
  LOAD_FILES,
  REMOVE_FILE,
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
