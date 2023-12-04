import * as yup from "yup";

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

export const formValidationSchema = yup.object().shape({
  name: yup.string().required("Fullname is required"),
  email: yup.string().email("Wrong Email").required("Email is required"),
  phone: yup
    .string()
    .matches(
      phoneRegExp,
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    )
    .required("Phone is required"),
});
