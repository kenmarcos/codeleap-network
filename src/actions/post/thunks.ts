import { api } from "@/services";
import { getPostsSuccess, getPostsLoading } from "./actions";
import { RootState } from "@/redux/store";

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
