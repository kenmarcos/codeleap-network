import { Post, Posts } from "@/redux/post/reducer";
import { ActionType } from "./actionTypes";

export const getPostsLoading = () => {
  return {
    type: ActionType.GET_POSTS_LOADING,
  };
};

export const getPostsSuccess = (posts: Posts) => {
  return {
    type: ActionType.GET_POSTS_SUCCESS,
    payload: posts,
  };
};

export const resetPosts = () => {
  return {
    type: ActionType.RESET_POSTS,
  };
};

export const addPost = (post: Post) => {
  return {
    type: ActionType.ADD_POST,
    payload: post,
  };
};

export const deletePost = (postId: number) => {
  return {
    type: ActionType.DELETE_POST,
    payload: postId,
  };
};

export const editPost = (post: Post) => {
  return {
    type: ActionType.EDIT_POST,
    payload: post,
  };
};
