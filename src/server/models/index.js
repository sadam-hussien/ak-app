import Api from "../index";

export function server_create_models(data) {
  return Api().post("datasets/", data);
}

export function server_get_models() {
  return Api().get("api/models/?is_public=true");
}
