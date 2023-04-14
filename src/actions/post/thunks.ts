import { api } from "@/services";
import { getPostsSuccess, getPostsLoading, addPost } from "./actions";
import { RootState } from "@/redux/store";
import { UseFormReset } from "react-hook-form";
import { createPostData } from "@/pages/Home/components/CreatePostForm/types";

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

      dispatch(addPost(response.data) as any);

      reset();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
};
