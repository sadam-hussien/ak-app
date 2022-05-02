import axios from "axios";

export default function Api() {
  const appClient = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("token")
          ? JSON.parse(localStorage.getItem("token"))
          : null
      }`,
      Accept: "application/json",
    },
  });
  appClient.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log("error response", error.response);
      return Promise.reject(error.response);
    }
  );

  return appClient;
}
