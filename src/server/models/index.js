import Api from "../index";

export function server_create_models(data) {
  return Api().post("datasets/", data);
}

export function server_get_models() {
  const params = {
    is_public: true,
  };
  return Api().get("api/models/", (params = params));
}
