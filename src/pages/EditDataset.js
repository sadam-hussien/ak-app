import React, { Fragment, useContext } from "react";

import { Store } from "../store";

import { Navigate, useLocation } from "react-router-dom";

import {
  Upload,
  DataCleaning,
  Tagging,
  SplitData,
} from "../components/createDataset";

import { Finalize } from "../components/editDataset";

import { Modal } from "../components/global";

import { modal_split, modal_tagging } from "../constants";

export default function EditDataset() {
  const { state } = useLocation();
  const { from, name, id } = state;

  // store
  const { globalStore, dataStore } = useContext(Store);
  const { modalStatus } = globalStore;
  const { min, max } = dataStore.splitData;

  // redirect if there is no ceation
  if (!from || from !== "edit" || !id) {
    return <Navigate to="/datasets" />;
  }

  return (
    <section className="p-l p-r p-b p-t">
      <CreateDatabaseStepsWrapper>
        <Upload name={name} />
        <DataCleaning name={name} />
        <div></div>
        <div></div>
        <Finalize name={name} />
      </CreateDatabaseStepsWrapper>

      {modalStatus.isActive && (
        <Fragment>
          {modalStatus.comp === modal_tagging ? (
            <Modal
              noContainer
              style={{ top: "var(--header-height)", display: "block" }}
            >
              <Tagging />
            </Modal>
          ) : modalStatus.comp === modal_split ? (
            <Modal title="how do you want to split your data?" titleLeft>
              <SplitData name={name} data={{ min, max }} />
            </Modal>
          ) : (
            ""
          )}
        </Fragment>
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
