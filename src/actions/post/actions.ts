import { Post } from "@/redux/post/reducer";
import { ActionType } from "./actionTypes";

export const getPostsLoading = () => {
  return {
    type: ActionType.GET_POSTS_LOADING,
  };
};

export const getPostsSuccess = (posts: Post[]) => {
  return {
    type: ActionType.GET_POSTS_SUCCESS,
    posts,
  };
};
