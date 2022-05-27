import Api from "../index";

export function server_create_dataset(data) {
  return Api().post("api/datasets/", data);
}

export function server_get_dataset() {
  return Api().get("api/datasets/?is_public=true");
}
