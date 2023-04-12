import { useForm } from "react-hook-form";
import { createPostData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "./schema";
import { useTypedSelector } from "@/hooks/useTypeSelector";

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
    formState: { errors, dirtyFields },
  } = createPostForm;

  const handleFormSubmit = (data: createPostData) => {
    console.log(data);
  };

  return {
    createPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    dirtyFields,
  };
};
