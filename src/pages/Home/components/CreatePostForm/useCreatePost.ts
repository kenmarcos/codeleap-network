import { useForm } from "react-hook-form";
import { createPostData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "./schema";
import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { api } from "@/services";
import { addPost } from "@/actions/post/actions";
import { useState } from "react";
import { addPostThunk } from "@/actions/post/thunks";

export const useCreatePost = () => {
  const dispatch = useAppDispatch();
  const { username } = useTypedSelector((store) => store.user);
  const [isLoading, setIsLoading] = useState(false);

  const createPostForm = useForm<createPostData>({
    resolver: yupResolver(createPostSchema),
    defaultValues: {
      username,
      title: "",
      content: "",
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = createPostForm;

  const handleFormSubmit = async (data: createPostData) => {
    dispatch(addPostThunk(data, reset, setIsLoading) as any);
  };

  return {
    createPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    dirtyFields,
    isLoading,
  };
};
