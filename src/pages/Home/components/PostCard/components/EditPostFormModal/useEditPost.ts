import { useAppDispatch } from "@/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editPostSchema } from "./schema";
import { editPostData } from "./types";
import { api } from "@/services";
import { editPost } from "@/actions/post/actions";
import { useState } from "react";
import { editPostThunk } from "@/actions/post/thunks";

interface UseEditPostProps {
  title: string;
  content: string;
  postId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useEditPost = (props: UseEditPostProps) => {
  const { title, content, postId, setOpen } = props;
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const editPostForm = useForm<editPostData>({
    resolver: yupResolver(editPostSchema),
    defaultValues: {
      title,
      content,
    },
  });

  const {
    handleSubmit,
    formState: { errors, isDirty },
  } = editPostForm;

  const handleFormSubmit = async (data: editPostData) => {
    dispatch(editPostThunk(data, postId, setOpen, setIsLoading) as any);
  };

  return {
    editPostForm,
    handleSubmit,
    handleFormSubmit,
    errors,
    isDirty,
    isLoading,
  };
};
