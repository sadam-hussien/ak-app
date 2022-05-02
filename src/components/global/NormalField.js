import React, { Fragment, useState } from "react";

import { Field, ErrorMessage } from "formik";

import styles from "../../styles/global/form.module.css";

export default function NormalField({
  name,
  label,
  type,
  placeholder,
  disabled,
  icon,
  style,
}) {
  // for password show/hide btn
  const [passwordShown, setPasswordShown] = useState(false);
  const handleInpType = () => {
    if (type === "password") {
      if (passwordShown) {
        return "text";
      } else {
        return "password";
      }
    }
    return type;
  };
  return (
    <Fragment>
      <div className={`form-group ${styles.formGroup}`}>
        {label && (
          <label htmlFor={label} className={`${styles.label}`}>
            {label}
          </label>
        )}
        <Field
          type={handleInpType()}
          name={name}
          id={label}
          placeholder={placeholder}
          className={`form-control ${styles.input}  ${
            disabled ? styles.disabledInput : ""
          }`}
          disabled={disabled ? disabled : false}
          style={style}
        />
        {type === "password" && (
          <button
            onClick={() => setPasswordShown(!passwordShown)}
            type="button"
            className={`${styles.passwordBtn} ${
              passwordShown ? styles.active : ""
            }`}
          >
            {!passwordShown ? (
              <ion-icon name="eye-off-outline"></ion-icon>
            ) : (
              <ion-icon name="eye-outline"></ion-icon>
            )}
          </button>
        )}
        {icon && (
          <span className={`${styles.fieldIcon} `}>
            <ion-icon name={icon}></ion-icon>
          </span>
        )}
      </div>
      <ErrorMessage name={name} component="span" className={styles.errorMsg} />
    </Fragment>
  );
}
