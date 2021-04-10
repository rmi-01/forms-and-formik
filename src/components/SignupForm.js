import { useFormik } from "formik";
import lodash from "lodash";
import ErrorMessage from "./ErrorMessage";
import signupSchema from "./signupSchema";
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
    validationSchema: signupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {
    values,
    handleChange,
    errors,
    touched,
    // handleSubmit,
    isValid,
    validateForm,
    resetForm,
    handleBlur,
  } = formik;

  const handleSubmit = () => {
    validateForm().then((errors) => {
      if (!lodash.isEqual(errors, {})) return;
      resetForm({
        values: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
      });
    });
  };

  return (
    <div className="signup-form">
      <h1 className="title">SignUp Form</h1>
      <form>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <ErrorMessage {...{ errors, touched, name: "firstName" }} />
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SignupForm;
