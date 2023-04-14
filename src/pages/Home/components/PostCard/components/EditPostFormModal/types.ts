import * as yup from "yup";
import { editPostSchema } from "./schema";

export type editPostData = yup.InferType<typeof editPostSchema>;
