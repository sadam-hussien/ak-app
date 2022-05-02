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
