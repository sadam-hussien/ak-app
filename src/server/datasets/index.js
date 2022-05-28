import Api from "../index";

export function server_create_dataset(data) {
  return Api().post("api/datasets/", data);
}

export function server_create_dataset_upload({ data, id }) {
  return Api().put(`api/storage/upload/?datasetId=${id}`, data);
}

export function server_edit_dataset({ data, id }) {
  return Api().put(`datasets/${id}`, data);
}

export function server_get_dataset() {
  return Api().get("api/datasets/?is_public=true");
}

export function server_get_dataset_item({ id }) {
  return Api().get(`api/datasets/${id}/`);
}
