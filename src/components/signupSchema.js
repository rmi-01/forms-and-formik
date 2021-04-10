import * as Yup from "yup";

const SignupSchema = Yup.object({
  firstName: Yup.string()
    .min(6, "First name is too short")
    .max(50, "First name is too long")
    .required("Kindly fill out your first name"),
});

export default SignupSchema;
