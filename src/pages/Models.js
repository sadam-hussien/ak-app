import React, { useContext } from "react";

import { Store, action_toggle_modal } from "../store";

import { Head, Card, Modal } from "../components/global";

import { modal_create_model } from "../constants";

import { CreateModel } from "../components/crud";

export default function Models() {
  const { globalDispatch, globalStore, modelStore } = useContext(Store);

  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my models"
        btn="create new model"
        callback={() =>
          globalDispatch(action_toggle_modal({ comp: modal_create_model }))
        }
      />

      {/* items  */}
      <div className="row g-5 ">
        {modelStore.models.length &&
          modelStore.models.map((item, index) => (
            <div key={index} className="col-4">
              <Card data={item} route="models" />
            </div>
          ))}
      </div>

      {globalStore.modalStatus.isActive && (
        <Modal col="col-12" title="create a new model" titleLeft>
          <CreateModel />
        </Modal>
      )}
    </section>
  );
}
