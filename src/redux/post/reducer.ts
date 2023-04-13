import { Action, ActionType } from "@/actions/post/actionTypes";

export interface Post {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface Posts {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export interface PostsState extends Posts {
  isLoading: boolean;
}

const defaultState = {
  isLoading: false,
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const postReducer = (state: PostsState = defaultState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_POSTS_LOADING:
      return { ...state, isLoading: true };

    case ActionType.GET_POSTS_SUCCESS:
      const { payload } = action;
      return {
        isLoading: false,
        next: payload.next,
        previous: payload.previous,
        results: [...state.results, ...payload.results],
      };

    default:
      return state;
  }
};

export default postReducer;
