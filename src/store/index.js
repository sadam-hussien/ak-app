import React, { createContext, useReducer, useEffect } from "react";

import { authState, globalState } from "./state";

import globalReducer, { authReducer } from "./reducers";

// actions
import { action_login, action_logout, action_toggle_modal } from "./actions";
export { action_login, action_logout, action_toggle_modal };
// *****

export const Store = createContext();

export function Provider({ children }) {
  const [globalStore, globalDispatch] = useReducer(globalReducer, globalState);
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
        authStore,
        authDispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
