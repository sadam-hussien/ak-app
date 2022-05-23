import Api from "../index";

export function server_register(data) {
  return Api().post(`user/register`, data);
}

export function server_logout() {
  return Api().get(`/api/logout`);
}
