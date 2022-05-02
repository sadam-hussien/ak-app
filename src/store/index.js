import React, { createContext, useReducer, useEffect } from "react";

import { authState } from "./state";

import { authReducer } from "./reducers";

// actions
import { action_login, action_logout } from "./actions";
export { action_login, action_logout };
// *****

export const Store = createContext();

export function Provider({ children }) {
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
        authStore,
        authDispatch,
      }}
    >
      {children}
    </Store.Provider>
  );
}
