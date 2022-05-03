import React, { useContext } from "react";

import { Store } from "../store";

import styles from "../styles/home/index.module.css";

const info = [
  {
    label: "your organization",
    value: "akike technologies",
  },
  {
    label: "number of models trained",
    value: "47",
  },
  {
    label: "number of dataset owned",
    value: "22",
  },
  {
    label: "number of team members",
    value: "4",
  },
];

export default function Home() {
  const { authStore } = useContext(Store);
  const { user } = authStore;
  return (
    <section className="p-l p-r p-b p-t">
      <h2 className={`text-capitalize ${styles.welcome}`}>
        welcome back, {user.name}
      </h2>
      {info.map((item, index) => (
        <div
          className={`${styles.infoBox} d-flex align-items-center`}
          key={index}
        >
          <h5 className={`text-capitalize ${styles.infolabel}`}>
            {item.label}: {item.value}
          </h5>
        </div>
      ))}
    </section>
  );
}
