import { LOG_IN, LOG_OUT, TOGGLE_MODAL } from "./types";

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
