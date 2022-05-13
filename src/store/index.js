import React, { createContext, useReducer, useEffect } from "react";

import { authState, globalState, dataState } from "./state";

import globalReducer, { authReducer, dataReducer } from "./reducers";

// actions
import {
  action_login,
  action_logout,
  action_toggle_modal,
  action_create_dataset,
  action_back_step,
  action_load_files,
  action_next_step,
  action_remove_file,
  action_add_new_tag,
  action_edit_tag,
  action_delete_tag,
  action_handle_tags,
  action_done_tags,
} from "./actions";
export {
  action_login,
  action_logout,
  action_toggle_modal,
  action_create_dataset,
  action_back_step,
  action_load_files,
  action_next_step,
  action_remove_file,
  action_add_new_tag,
  action_edit_tag,
  action_delete_tag,
  action_handle_tags,
  action_done_tags,
};
// *****

export const Store = createContext();

export function Provider({ children }) {
  const [globalStore, globalDispatch] = useReducer(globalReducer, globalState);
  const [dataStore, dataDispatch] = useReducer(dataReducer, dataState);
  // auth
  const [authStore, authDispatch] = useReducer(authReducer, authState());

  // save auth in localstorage
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(authStore?.token));
    localStorage.setItem("user", JSON.stringify(authStore?.user));
  }, [authStore]);

  return (
    <Store.Provider
      value={{
        globalStore,
        globalDispatch,
        dataStore,
        dataDispatch,
        authStore,
        authDispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
