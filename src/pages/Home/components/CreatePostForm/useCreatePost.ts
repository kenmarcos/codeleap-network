import { useForm } from "react-hook-form";
import { createPostData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "./schema";
import { useTypedSelector } from "@/redux/hooks";
import { api } from "@/services";

export const useCreatePost = () => {
  const { username } = useTypedSelector((store) => store.user);

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
    try {
      await api.post("/", data);

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    dirtyFields,
  };
};
