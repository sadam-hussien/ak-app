import React from "react";

import { Head, Card } from "../components/global";

import { publicDatasets } from "../constants";

export default function PublicDatasets() {
  return (
    <section className="p-l p-r p-b p-t">
      <Head title="public datasets" />

      {/* items  */}
      <div className="row g-5 ">
        {publicDatasets.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4">
            <Card data={item} route="datasets" />
          </div>
        ))}
      </div>
    </section>
  );
}
