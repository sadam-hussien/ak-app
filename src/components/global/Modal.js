import React, { Fragment, useContext } from "react";

import ReactDOM from "react-dom";

import { Store, action_toggle_modal } from "../../store";

import { CloseOutlined } from "@mui/icons-material";

import styles from "../../styles/global/modal.module.css";

export default function Modal({
  title,
  children,
  noContainer,
  style = {},
  col,
  titleStyle = {},
  titleLeft,
}) {
  const { globalDispatch } = useContext(Store);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className={`modal ${styles.modal}`} style={style} tabIndex={-1}>
          {!noContainer ? (
            <div className="container">
              <div className="row justify-content-center">
                <div className={`${col ? col : "col-md-10 col-lg-8"} `}>
                  <div className={`${styles.modalContent}`}>
                    {/* start header */}
                    <div
                      className={`modal-header position-relative border-0 p-0 ${styles.modalHeader}`}
                    >
                      <h5
                        className={`modal-title text-capitalize ${
                          titleLeft ? "text-left" : "text-center"
                        } w-100 ${styles.modalTitle}`}
                        style={titleStyle}
                      >
                        {title}
                      </h5>
                      <button
                        className={`${styles.closeModal} border-0`}
                        onClick={() => globalDispatch(action_toggle_modal())}
                      >
                        <CloseOutlined />
                      </button>
                    </div>
                    {/* start modal obdy  */}
                    <div className={`modal-body  border-0 p-0`}>{children}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Fragment>{children}</Fragment>
          )}
        </div>,
        document.getElementById("modal-wrapper")
      )}
    </Fragment>
  );
}
