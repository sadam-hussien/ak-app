import React from "react";

import { CreateModel } from "../components/crud";

export default function ModelCreate() {
  return (
    <section className="p-l p-r p-b p-t">
      <h5
        className="text-capitalize"
        style={{
          color: "var(--new-dark-color)",
          fontWeight: "500",
          marginBottom: "40px",
        }}
      >
        creating a new model
      </h5>
      <CreateModel />
    </section>
  );
}
