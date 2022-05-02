import React from "react";

import { Link } from "react-router-dom";

import Title from "../components/auth/Title";

import RegisterForm from "../components/auth/register/Form";

import styles from "../styles/auth/index.module.css";

export default function Register() {
  return (
    <section className={`page p-t p-b p-l p-r`}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className={`${styles.authContent}`}>
            <Title
              title="sign into app"
              subTitle="please enter your details to continue."
            />
            <RegisterForm />
            <h6 className={styles.account}>
              already have an account?{" "}
              <Link to="/login" className="text-capitalize">
                sign in
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
