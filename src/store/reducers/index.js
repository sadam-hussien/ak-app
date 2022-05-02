import authReducer from "./authReducer";

export default function globalReducer(state, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export { authReducer };
