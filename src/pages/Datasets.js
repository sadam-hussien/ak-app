import React, { useContext, useEffect } from "react";

import {
  Store,
  action_toggle_modal,
  action_reset_dataset,
  action_get_datasets,
} from "../store";

import { Head, Card, Modal, PlaceholderLoader } from "../components/global";

import { modal_add_dataset } from "../constants";

import { CreateDataSet } from "../components/createDataset";

import { useFetcher } from "../hooks";

import { server_get_dataset } from "../server/datasets";

export default function Datasets() {
  const { globalDispatch, globalStore, dataStore, dataDispatch } =
    useContext(Store);

  const { fetchItems } = useFetcher({ callback: server_get_dataset });

  useEffect(() => {
    if (fetchItems.length) {
      dataDispatch(action_get_datasets(fetchItems));
    }
  }, [fetchItems]);

  useEffect(() => {
    dataDispatch(action_reset_dataset());
  }, [dataDispatch]);

  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my datasets"
        btn="create new dataset"
        callback={() =>
          globalDispatch(action_toggle_modal({ comp: modal_add_dataset }))
        }
      />

      {fetchItems && fetchItems.length ? (
        <div className="row g-5 ">
          {fetchItems.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <Card data={item} route="datasets" />
            </div>
          ))}
        </div>
      ) : (
        <PlaceholderLoader />
      )}

      {globalStore.modalStatus.isActive && (
        <Modal title="create a new dataset">
          <CreateDataSet />
        </Modal>
      )}
    </section>
  );
}
