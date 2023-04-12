import { useForm } from "react-hook-form";
import { signupData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./schema";

export const useSignup = () => {
  const signupForm = useForm<signupData>({
    resolver: yupResolver(signupSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = signupForm;

  const handleFormSubmit = (data: signupData) => {
    console.log(data);
  };

  return {
    signupForm,
    handleSubmit,
    handleFormSubmit,
    errors,
  };
};
