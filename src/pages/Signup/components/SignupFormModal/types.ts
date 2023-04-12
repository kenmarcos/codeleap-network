import * as yup from "yup";
import { signupSchema } from "./schema";

export type signupData = yup.InferType<typeof signupSchema>;
