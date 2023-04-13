import { Post, Posts, PostsState } from "@/redux/post/reducer";

export enum ActionType {
  GET_POSTS_LOADING = "GET_POSTS_LOADING",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
}

interface ActionGetPostsLoading {
  type: ActionType.GET_POSTS_LOADING;
}

interface ActionGetPostsSuccess {
  type: ActionType.GET_POSTS_SUCCESS;
  payload: Posts;
}

export type Action = ActionGetPostsSuccess | ActionGetPostsLoading;
