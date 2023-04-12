import * as yup from "yup";
import { createPostSchema } from "./schema";

export type createPostData = yup.InferType<typeof createPostSchema>;
