import React from "react";

import { Head, Card } from "../components/global";

import { models } from "../constants";

export default function PublicModels() {
  return (
    <section className="p-l p-r p-b p-t">
      <Head title="public models" />

      {/* items  */}
      <div className="row g-5 ">
        {models.slice(0, 3).map((item) => (
          <div key={item.id} className="col-4">
            <Card data={item} route="models" />
          </div>
        ))}
      </div>
    </section>
  );
}
