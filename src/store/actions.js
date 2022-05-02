import { LOG_IN, LOG_OUT } from "./types";

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
