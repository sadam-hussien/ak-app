import Api from "../index";

export function server_register(data) {
  return Api().post(`api/user/register/`, data);
}

export function server_login(data) {
  return Api().post("api/user/auth/", data);
}
