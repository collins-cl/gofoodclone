import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@.#$!%*?&]{6,20}$/;

//login schema
export const loginSchema = yup.object().shape({
  email: yup.string().email("must be an email").required("email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "password must contain a capital letter,  a small letter and a symbol"
    )
    .required("Please enter your password"),
});

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("must have a firstname"),

  lastName: yup.string().required("must have a lastName"),

  email: yup.string().email("must be an email").required("email is required"),

  password: yup
    .string()
    .matches(
      passwordRegex,
      "password must contain a capital letter,  a small letter and a symbol"
    )
    .required("Please enter your password"),
});
