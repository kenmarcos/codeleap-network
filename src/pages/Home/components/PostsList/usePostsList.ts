import { getPostsThunk } from "@/actions/post/thunks";
import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { PostsState } from "@/redux/post/reducer";

export const usePostsList = () => {
  const dispatch = useAppDispatch();

  const posts: PostsState = useTypedSelector((store) => store.posts);

  const handlePagination = () => {
    dispatch(getPostsThunk() as any);
  };

  return {
    posts,
    handlePagination,
  };
};
