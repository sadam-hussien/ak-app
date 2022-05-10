import React, { Fragment, useContext } from "react";

import { Store } from "../store";

import { Navigate, useLocation } from "react-router-dom";

import { Upload, DataCleaning, Tagging } from "../components/createDataset";

import { Modal } from "../components/global";

export default function CreateDatabase() {
  const { state } = useLocation();
  const from = state?.from;
  const name = state?.name;

  // store
  const { globalStore } = useContext(Store);
  const { modalStatus } = globalStore;

  // redirect if there is no ceation
  if (!from || from !== "create") {
    return <Navigate to="/datasets" />;
  }
  return (
    <section className="p-l p-r p-b p-t">
      <CreateDatabaseStepsWrapper>
        <Upload name={name} />
        <DataCleaning name={name} />
      </CreateDatabaseStepsWrapper>

      {modalStatus.isActive && (
        <Modal
          noContainer
          style={{ top: "var(--header-height)", display: "block" }}
        >
          <Tagging />
        </Modal>
      )}
    </section>
  );
}

function CreateDatabaseStepsWrapper({ children }) {
  // store
  const { dataStore } = useContext(Store);

  const arrOfChildren = React.Children.toArray(children);

  return <Fragment>{arrOfChildren[dataStore.active]}</Fragment>;
}
