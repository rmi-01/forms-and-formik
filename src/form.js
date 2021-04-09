import { ErrorMessage, useFormik } from "formik";
import React from "react";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const { values, handleChange } = formik;
  return (
    <form>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={handleChange}
        value={values.firstName}
      />
      {/* <ErrorMessage name="firstName" /> */}
    </form>
  );
};

export default Form;
