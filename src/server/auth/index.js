import Api from "../index";

export function server_login(data) {
  return Api().post(`/api/login`, data);
}

export function server_logout() {
  return Api().get(`/api/logout`);
}
