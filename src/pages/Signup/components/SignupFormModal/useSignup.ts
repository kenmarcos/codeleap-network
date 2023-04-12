import { signupUser } from "@/actions/user/actions";
import { useForm } from "react-hook-form";
import { signupData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./schema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupForm = useForm<signupData>({
    resolver: yupResolver(signupSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = signupForm;

  const handleFormSubmit = (data: signupData) => {
    dispatch(signupUser(data));

    navigate("/home");
  };

  return {
    signupForm,
    handleSubmit,
    handleFormSubmit,
    errors,
  };
};
