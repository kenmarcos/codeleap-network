import * as yup from "yup";

export const signupSchema = yup.object().shape({
  username: yup.string().required("*Required field"),
});
