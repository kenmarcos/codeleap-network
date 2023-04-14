import { api } from "@/services";
import {
  getPostsSuccess,
  getPostsLoading,
  addPost,
  editPost,
  deletePost,
} from "./actions";
import { RootState } from "@/redux/store";
import { UseFormReset } from "react-hook-form";
import { createPostData } from "@/pages/Home/components/CreatePostForm/types";
import { editPostData } from "@/pages/Home/components/PostCard/components/EditPostFormModal/types";
import { toast } from "react-hot-toast";

const LIMIT_PER_PAGE = 10;

export const getPostsThunk = () => {
  return async (dispatch: any, getState: () => RootState) => {
    dispatch(getPostsLoading());

    const { next } = getState().posts;

    const offset = next ? new URL(next).searchParams.get("offset") : 0;

    try {
      const response = await api.get("/", {
        params: {
          limit: LIMIT_PER_PAGE,
          offset,
        },
      });

      dispatch(getPostsSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPostThunk = (
  data: createPostData,
  reset: UseFormReset<{
    username?: string | undefined;
    title: string;
    content: string;
  }>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (dispatch: any) => {
    setIsLoading(true);

    try {
      const response = await api.post("/", data);

      toast.success("Your post has been successfully created!");

      dispatch(addPost(response.data) as any);

      reset();
    } catch (error) {
      toast.error("Oops, something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };
};

export const editPostThunk = (
  data: editPostData,
  postId: number,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (dispatch: any) => {
    setIsLoading(true);

    try {
      const response = await api.patch(`/${postId}/`, data);

      toast.success("Your changes have been successfully saved!");

      dispatch(editPost(response.data) as any);

      setOpen(false);
    } catch (error) {
      toast.error("Oops, something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };
};

export const deletePostThunk = (
  postId: number,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return async (dispatch: any) => {
    setIsLoading(true);

    try {
      await api.delete(`/${postId}/`);

      toast.success("Post is successfully deleted!");

      dispatch(deletePost(postId) as any);

      setOpen(false);
    } catch (error) {
      toast.error("Oops, something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };
};
