import { Action, ActionType } from "@/actions/post/actionTypes";

export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface PostState {
  isLoading: boolean;
  posts: Post[];
}

const defaultState = {
  isLoading: false,
  posts: [],
};

const postReducer = (state: PostState = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_POSTS_LOADING:
      return { ...state, isLoading: true };

    case ActionType.GET_POSTS_SUCCESS:
      const { posts } = action;
      return { ...state, isLoading: false, posts };

    default:
      return state;
  }
};

export default postReducer;
