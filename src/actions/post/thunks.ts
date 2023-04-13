import { api } from "@/services";
import { getPostsSuccess, getPostsLoading } from "./actions";

export const getPostsThunk = () => {
  return async (dispatch: any) => {
    dispatch(getPostsLoading());

    try {
      const response = await api.get("/");

      dispatch(getPostsSuccess(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};
