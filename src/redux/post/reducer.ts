import { Action, ActionType } from "@/actions/post/actionTypes";
import { compareAsc, parseISO } from "date-fns";

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

      const setPosts = new Set();

      const posts = [...state.results, ...payload.results];

      const uniqueResults = posts.filter((post) => {
        const duplicatedPost = setPosts.has(post.id);
        setPosts.add(post.id);

        return !duplicatedPost;
      });

      return {
        isLoading: false,
        next: payload.next,
        previous: payload.previous,
        results: uniqueResults,
      };

    case ActionType.RESET_POSTS:
      return {
        isLoading: false,
        count: 0,
        next: null,
        previous: null,
        results: [],
      };

    case ActionType.ADD_POST:
      const post = action.payload;
      return {
        ...state,
        results: [post, ...state.results].sort((firstPost, secondPost) => {
          return compareAsc(
            parseISO(secondPost.created_datetime),
            parseISO(firstPost.created_datetime)
          );
        }),
      };

    case ActionType.DELETE_POST:
      return {
        ...state,
        results: [
          ...state.results.filter((post) => post.id !== action.payload),
        ],
      };

    case ActionType.EDIT_POST:
      const filteredPosts = state.results.filter(
        (post) => post.id !== action.payload.id
      );

      return {
        ...state,
        results: [action.payload, ...filteredPosts].sort(
          (firstPost, secondPost) => {
            return compareAsc(
              parseISO(secondPost.created_datetime),
              parseISO(firstPost.created_datetime)
            );
          }
        ),
      };

    default:
      return state;
  }
};

export default postReducer;
