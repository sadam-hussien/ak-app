import React from "react";

import styles from "../../styles/auth/index.module.css";

export default function Title({ title, subTitle }) {
  return (
    <div className={`${styles.title}`}>
      <h5 className={`${styles.titleInner} text-capitalize`}>{title}</h5>
      {subTitle && (
        <p className={`${styles.subTitleInner} text-capitalize m-0`}>
          {subTitle}
        </p>
      )}
    </div>
  );
}
