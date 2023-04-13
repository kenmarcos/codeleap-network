import { Post } from "@/redux/post/reducer";

export enum ActionType {
  GET_POSTS_LOADING = "GET_POSTS_LOADING",
  GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS",
}

interface ActionGetPostsLoading {
  type: ActionType.GET_POSTS_LOADING;
}

interface ActionGetPostsSuccess {
  type: ActionType.GET_POSTS_SUCCESS;
  posts: Post[];
}

export type Action = ActionGetPostsSuccess | ActionGetPostsLoading;
