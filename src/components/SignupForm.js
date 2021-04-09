import { ErrorMessage, useFormik } from "formik";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { values, handleChange } = formik;
  return (
    <div className="signup-form">
      <h1 className="title">SignUp Form</h1>
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
    </div>
  );
};

export default SignupForm;
