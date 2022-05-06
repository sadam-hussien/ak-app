import React, { useContext } from "react";

import { Store, action_toggle_modal } from "../store";

import { Head, DatasetItem, Modal } from "../components/global";

import { datasets, modal_add_dataset } from "../constants";

import { CreateDataSet } from "../components/crud";

export default function Datasets() {
  const { globalDispatch, globalStore } = useContext(Store);
  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my datasets"
        btn="create new dataset"
        callback={() =>
          globalDispatch(action_toggle_modal({ comp: modal_add_dataset }))
        }
      />

      {/* items  */}
      <div className="row g-5 ">
        {datasets.map((item) => (
          <div key={item.id} className="col-4">
            <DatasetItem data={item} />
          </div>
        ))}
      </div>

      {globalStore.modalStatus.isActive && (
        <Modal title="create a new dataset">
          <CreateDataSet />
        </Modal>
      )}
    </section>
  );
}
