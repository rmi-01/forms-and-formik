import * as Yup from "yup";

const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(4, "First name is too short")
    .max(50, "First name is too long")
    .required("Kindly fill out your first name"),
  lastName: Yup.string()
    .min(4, "Last name is too short")
    .max(50, "Last name is too long")
    .required("Kindly fill out your last name"),
  email: Yup.string()
    .email("Kindly fill valid email")
    .required("Kindly fill out your email"),
  password: Yup.string()
    .min(6, "Password is too short")
    .max(50, "Password is too long")
    .required("Kindly fill out your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Kindly confirm your password"),
});

export default SignupSchema;
