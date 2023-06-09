import Button from "@/components/Button";
import PostCard from "../PostCard";
import { CircleNotch, Plus } from "phosphor-react";
import { usePostsList } from "./usePostsList";
import PostCardSkeleton from "../PostCardSkeleton";

const PostsList = () => {
  const { posts, handlePagination } = usePostsList();

  return (
    <>
      {!!posts.isLoading &&
        [...Array(3)].map((_, index) => <PostCardSkeleton key={index} />)}

      {!!posts.results.length && (
        <>
          <ul className="space-y-6">
            {posts.results.map((post) => (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>

          <Button
            className="btn-primary w-full py-4 space-x-2"
            onClick={handlePagination}
          >
            {!!posts.isLoading && (
              <CircleNotch className="animate-spin" size={20} />
            )}

            {!posts.isLoading && (
              <>
                <Plus size={20} />
                <span>Load more posts</span>
              </>
            )}
          </Button>
        </>
      )}
    </>
  );
};

export default PostsList;
