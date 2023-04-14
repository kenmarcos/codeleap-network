import { Post, Posts, PostsState } from "@/redux/post/reducer";

export enum ActionType {
  GET_POSTS_LOADING = "GET_POSTS_LOADING",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
  RESET_POSTS = "RESET_POSTS",
  ADD_POST = "ADD_POST",
  DELETE_POST = "DELETE_POST",
  EDIT_POST = "EDIT_POST",
}

interface ActionGetPostsLoading {
  type: ActionType.GET_POSTS_LOADING;
}

interface ActionGetPostsSuccess {
  type: ActionType.GET_POSTS_SUCCESS;
  payload: Posts;
}

interface ActionResetPosts {
  type: ActionType.RESET_POSTS;
}

interface ActionAddPost {
  type: ActionType.ADD_POST;
  payload: Post;
}

interface ActionDeletePost {
  type: ActionType.DELETE_POST;
  payload: number;
}

interface ActionEditPost {
  type: ActionType.EDIT_POST;
  payload: Post;
}

export type Action =
  | ActionGetPostsSuccess
  | ActionGetPostsLoading
  | ActionResetPosts
  | ActionAddPost
  | ActionDeletePost
  | ActionEditPost;
