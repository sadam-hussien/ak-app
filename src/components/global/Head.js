import React from "react";

import styles from "../../styles/global/head.module.css";

export default function Head({ title, btn, callback }) {
  return (
    <div
      className={`d-flex align-items-center justify-content-between flex-wrap ${styles.head}`}
    >
      <h4 className={`m-0 text-capitalize ${styles.headTitle}`}>{title}</h4>
      {btn && (
        <button
          type="button"
          className={`border-0 text-capitalize ${styles.headBtn}`}
          onClick={callback ? () => callback() : null}
        >
          {btn}
        </button>
      )}
    </div>
  );
}
