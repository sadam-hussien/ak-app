import { datasets } from "../constants";

export const authState = () => {
  const getToken = JSON.parse(localStorage.getItem("token"));
  const getuser = JSON.parse(localStorage.getItem("user"));
  if (getToken && getuser) {
    return {
      auth: true,
      token: getToken,
      user: getuser,
    };
  }
  return {
    auth: false,
    token: null,
    user: null,
  };
};

export const globalState = {
  modalStatus: {
    isActive: false,
    comp: null,
    id: null,
  },
};

export const dataState = {
  name: "",
  tag: "",
  active: 0,
  step: "upload",
  files: [],
  annotated: [],
  datasets: datasets,
};
