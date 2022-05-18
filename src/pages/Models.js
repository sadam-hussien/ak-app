import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Store, action_toggle_modal, action_reset_dataset } from "../store";

import { Head, Card, Modal } from "../components/global";

import { modal_add_dataset } from "../constants";

import { CreateDataSet } from "../components/crud";

export default function Models() {
  const { globalDispatch, globalStore, dataStore, dataDispatch } =
    useContext(Store);

  const navigate = useNavigate();

  useEffect(() => {
    dataDispatch(action_reset_dataset());
  }, [dataDispatch]);
  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my models"
        btn="create new model"
        callback={() => console.log("create")}
      />

      {/* items  */}
      <div className="row g-5 ">
        {dataStore.datasets.length &&
          dataStore.datasets.map((item, index) => (
            <div key={index} className="col-4">
              <Card data={item} route="models" />
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
