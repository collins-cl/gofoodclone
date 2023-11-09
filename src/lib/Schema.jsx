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

export const checkoutSchema = yup.object().shape({
  name: yup.string().required("must input name").min(3, "name too short"),

  address: yup
    .string()
    .required("address required")
    .min(5, "address too short"),

  landmark: yup.string().required("landmark required"),

  city: yup.string().required("field required for deluvery bus stop"),

  email: yup.string().required("email is required").email("must be an email"),

  mobile: yup
    .number()
    .required("number input required")
    .typeError("must be a number")
    .min(10, "can't be less than 10"),
});
