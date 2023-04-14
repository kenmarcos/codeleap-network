import * as yup from "yup";

export const editPostSchema = yup.object().shape({
  title: yup.string().required("*Required field"),
  content: yup.string().required("*Required field"),
});
