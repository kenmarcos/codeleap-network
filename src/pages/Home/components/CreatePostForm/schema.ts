import * as yup from "yup";

export const createPostSchema = yup.object().shape({
  username: yup.string(),
  title: yup.string().required("*Required field"),
  content: yup.string().required("*Required field"),
});
