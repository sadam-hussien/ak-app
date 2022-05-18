import React from "react";

import { Head, Card } from "../components/global";

import { publicModels } from "../constants";

export default function PublicModels() {
  return (
    <section className="p-l p-r p-b p-t">
      <Head title="public datasets" />

      {/* items  */}
      <div className="row g-5 ">
        {publicModels.map((item) => (
          <div key={item.id} className="col-4">
            <Card data={item} route="models" />
          </div>
        ))}
      </div>
    </section>
  );
}
