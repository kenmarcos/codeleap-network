import { useAppDispatch } from "@/redux/hooks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { editPostSchema } from "./schema";
import { editPostData } from "./types";
import { api } from "@/services";
import { editPost } from "@/actions/post/actions";

interface UseEditPostProps {
  title: string;
  content: string;
  postId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useEditPost = (props: UseEditPostProps) => {
  const { title, content, postId, setOpen } = props;

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
    try {
      const response = await api.patch(`/${postId}/`, data);

      dispatch(editPost(response.data) as any);

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return { editPostForm, handleSubmit, handleFormSubmit, errors, isDirty };
};
