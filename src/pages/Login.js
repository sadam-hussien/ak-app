import React from "react";

import { Link } from "react-router-dom";

import Title from "../components/auth/Title";

import LoginForm from "../components/auth/login/Form";

import styles from "../styles/auth/index.module.css";

export default function Login() {
  return (
    <section className={`page p-t p-b p-l p-r`}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className={`${styles.authContent}`}>
            <Title
              title="sign into app"
              subTitle="please enter your details to continue."
            />
            <LoginForm />
            <h6 className={styles.account}>
              dont have an account?{" "}
              <Link to="/register" className="text-capitalize">
                sign up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
