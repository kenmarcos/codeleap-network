import { deletePostThunk } from "@/actions/post/thunks";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";

export const useDeleteAlert = (
  postId: number,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleDeleteBtnClick = async () => {
    dispatch(deletePostThunk(postId, setOpen, setIsLoading) as any);
  };

  return { isLoading, handleDeleteBtnClick };
};
