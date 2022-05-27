import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Store } from "../store";

import { Head, Card } from "../components/global";

import { useFetcher } from "../hooks";

import { server_get_models } from "../server/models";

export default function Models() {
  const navigate = useNavigate();
  const { modelStore } = useContext(Store);

  const { fetchItems } = useFetcher({ callback: server_get_models });

  return (
    <section className="p-l p-r p-b p-t">
      <Head
        title="my models"
        btn="create new model"
        callback={() => navigate("/model-create")}
      />

      {/* items  */}
      <div className="row g-5 ">
        {modelStore.models.length &&
          modelStore.models.map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <Card data={item} route="models" />
            </div>
          ))}
      </div>
    </section>
  );
}
