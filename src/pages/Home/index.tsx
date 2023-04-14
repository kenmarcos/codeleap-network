import { Navigate } from "react-router-dom";
import CreatePostForm from "./components/CreatePostForm";
import PostCard from "./components/PostCard";
import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getPostsThunk } from "@/actions/post/thunks";
import Button from "@/components/Button";

import { PostsState } from "@/redux/post/reducer";
import { CircleNotch, Plus } from "phosphor-react";
import { resetPosts } from "@/actions/post/actions";

const Home = () => {
  const { username } = useTypedSelector((store) => store.user);
  const posts: PostsState = useTypedSelector((store) => store.posts);
  const dispatch = useAppDispatch();

  if (!username) {
    return <Navigate to="/" />;
  }

  const handlePagination = () => {
    dispatch(getPostsThunk() as any);
  };

  useEffect(() => {
    dispatch(getPostsThunk() as any);

    return () => {
      dispatch(resetPosts() as any);
    };
  }, []);

  return (
    <>
      <section className="min-h-screen max-w-[800px] mx-auto bg-white">
        <header className="bg-primary py-[27px] px-[37px]">
          <h2 className="text-white">CodeLeap Network</h2>
        </header>

        <div className="p-6 space-y-6">
          <CreatePostForm />

          {!!posts.isLoading && <h2>Loading...</h2>}

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
                className="btn-primary w-full p-4 space-x-2"
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
        </div>
      </section>
    </>
  );
};

export default Home;
