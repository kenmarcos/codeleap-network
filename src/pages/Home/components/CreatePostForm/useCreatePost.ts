import { useForm } from "react-hook-form";
import { createPostData } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPostSchema } from "./schema";
import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { api } from "@/services";
import { addPost } from "@/actions/post/actions";

export const useCreatePost = () => {
  const dispatch = useAppDispatch();
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
      const response = await api.post("/", data);

      dispatch(addPost(response.data) as any);

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
