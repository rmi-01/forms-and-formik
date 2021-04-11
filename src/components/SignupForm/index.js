import { useFormik } from "formik";
import Particles from "react-particles-js";
import particleConfig from "./particlesjs-config.json";
import ErrorMessage from "./ErrorMessage";
import signupSchema from "./signupSchema";
import "./styles.css";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignupFormWrapper = ({ children }) => {
  return (
    <div className="signup-form-container">
      <Particles
        params={particleConfig}
        width="100%"
        height="100%"
        className="particles-container"
      />
      <div className="signup-form">
        <h1 className="title">User Signup</h1>
        {children}
      </div>
    </div>
  );
};

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      resetForm();
    },
    isInitialValid: signupSchema.isValidSync(initialValues),
  });
  const {
    values,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isValid,
    resetForm,
    handleBlur,
  } = formik;

  if (loading) {
    return (
      <SignupFormWrapper>
        <div className="loader" />
      </SignupFormWrapper>
    );
  }

  return (
    <SignupFormWrapper>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          placeholder="First Name"
        />
        <ErrorMessage {...{ errors, touched, name: "firstName" }} />
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          placeholder="Last Name"
        />
        <ErrorMessage {...{ errors, touched, name: "lastName" }} />
        <input
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Email"
        />
        <ErrorMessage {...{ errors, touched, name: "email" }} />
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="Password"
        />
        <ErrorMessage {...{ errors, touched, name: "password" }} />
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.confirmPassword}
          placeholder="Confirm Password"
        />
        <ErrorMessage {...{ errors, touched, name: "confirmPassword" }} />
        <button disabled={!isValid} type="submit">
          Submit
        </button>
      </form>
    </SignupFormWrapper>
  );
};

export default SignupForm;
