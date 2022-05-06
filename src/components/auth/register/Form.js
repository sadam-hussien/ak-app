import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

// store
import { Store, action_login } from "../../../store";

// formik
import { Formik, Form } from "formik";

// validation library
import * as Yup from "yup";

// my components
import { NormalField, CheckField, Btn, AlertToast } from "../../global";

// api
import { server_login } from "../../../server/auth";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  // navigation
  const navigate = useNavigate();

  // store
  const { authDispatch } = useContext(Store);

  // error schema
  const schema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("first name field is required"),
      email: Yup.string()
        .email("please enter valid email")
        .required("email field is required"),
      password: Yup.string().required("password field is required"),
    });
  };

  // submit form
  const submitForm = (values, action) => {
    setLoading(true);
    setTimeout(() => {
      // save in store
      authDispatch(
        action_login({
          token: "1dlkjfdkfjdfj",
          user: { name: "Rahul" },
        })
      );
      console.log(values);
      action.setSubmitting(false);
      navigate("/");
    }, 300);
  };

  return (
    <Formik
      initialValues={{ firstName: "", email: "", password: "", agree: false }}
      onSubmit={(values, actions) => submitForm(values, actions)}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <NormalField name="firstName" type="text" placeholder="first name" />
          <NormalField name="email" type="email" placeholder="email" />
          <NormalField
            name="password"
            type="password"
            placeholder="enter password"
          />
          <CheckField
            name="agree"
            label={
              <span>
                i agree with <span style={{ fontWeight: "500" }}>terms</span>{" "}
                and <span style={{ fontWeight: "500" }}>policies</span>.
              </span>
            }
          />
          <Btn type="submit" label="sign up" loading={loading} />
        </Form>
      )}
    </Formik>
  );
}
