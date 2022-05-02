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

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  // navigation
  const navigate = useNavigate();

  // store
  const { authDispatch } = useContext(Store);

  // error schema
  const schema = () => {
    return Yup.object().shape({
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
          user: { name: "mahmoud hussien" },
        })
      );
      console.log(values);
      action.setSubmitting(false);
      navigate("/");
    }, 300);
    // request real api (put your api)
    // server_login(values)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       // store user data and token in my store
    //       authDispatch(
    //         action_login({
    //           token: response?.data?.access_token,
    //           user: response?.data?.user,
    //         })
    //       );
    //       navigate("/");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("e", err);
    //     setLoading(false);
    //     action.setSubmitting(false);
    //     AlertToast("error", "invalid credentials");
    //   });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", agree: false }}
      onSubmit={(values, actions) => submitForm(values, actions)}
      validationSchema={schema}
    >
      {() => (
        <Form>
          <NormalField name="email" type="email" placeholder="email" />
          <NormalField
            name="password"
            type="password"
            placeholder="enter password"
          />
          <CheckField name="agree" label="i agree with terms and policies." />
          <Btn type="submit" label="login" loading={loading} />
        </Form>
      )}
    </Formik>
  );
}
