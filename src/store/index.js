import React, { createContext, useReducer, useEffect } from "react";

import { authState, globalState, dataState, modelState } from "./state";

import globalReducer, {
  authReducer,
  dataReducer,
  modelReducer,
} from "./reducers";

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
  action_handle_tags,
  action_done_tags,
  action_edit_tags,
  action_finish_dataset,
  action_reset_dataset,
  action_split_data,
  action_create_model,
  action_model_load_files,
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
  action_handle_tags,
  action_done_tags,
  action_edit_tags,
  action_finish_dataset,
  action_reset_dataset,
  action_split_data,
  action_create_model,
  action_model_load_files,
};
// *****

export const Store = createContext();

export function Provider({ children }) {
  const [globalStore, globalDispatch] = useReducer(globalReducer, globalState);
  const [dataStore, dataDispatch] = useReducer(dataReducer, dataState);
  const [modelStore, modelDispatch] = useReducer(modelReducer, modelState);
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
        modelStore,
        modelDispatch,
        authStore,
        authDispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
