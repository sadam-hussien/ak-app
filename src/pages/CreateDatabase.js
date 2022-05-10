import React, { Fragment, useContext } from "react";

import { Store } from "../store";

import { Navigate, useLocation } from "react-router-dom";

import { Upload, DataCleaning } from "../components/createDataset";

export default function CreateDatabase() {
  const { state } = useLocation();
  const from = state?.from;
  const name = state?.name;

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
    </section>
  );
}

function CreateDatabaseStepsWrapper({ children }) {
  // store
  const { dataStore } = useContext(Store);

  const arrOfChildren = React.Children.toArray(children);

  return <Fragment>{arrOfChildren[dataStore.active]}</Fragment>;
}
