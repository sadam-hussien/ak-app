import React, { Fragment } from "react";

import styles from "../../styles/global/form.module.css";

export default function Btn({
  type,
  callback,
  label,
  loading,
  disabled,
  icon,
  style,
  iconStyle,
}) {
  return (
    <button
      style={style}
      disabled={disabled}
      type={type ? type : "button"}
      className={`${styles.btn} text-capitalize`}
      onClick={callback ? () => callback() : null}
    >
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : icon ? (
        <Fragment>
          <span className={`${iconStyle ? styles.iconStyle : ""}`}>{icon}</span>
          {label}
        </Fragment>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
}
