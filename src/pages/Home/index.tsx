import { Navigate } from "react-router-dom";
import CreatePostForm from "./components/CreatePostForm";
import PostCard from "./components/PostCard";
import { useAppDispatch, useTypedSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { getPostsThunk } from "@/actions/post/thunks";

const Home = () => {
  const { username } = useTypedSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const { isLoading, posts } = useTypedSelector((store) => store.post);

  if (!username) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    dispatch(getPostsThunk() as any);
  }, []);

  return (
    <>
      <section className="min-h-screen max-w-[800px] mx-auto bg-white">
        <header className="bg-primary py-[27px] px-[37px]">
          <h2 className="text-white">CodeLeap Network</h2>
        </header>

        <div className="p-6 space-y-6">
          <CreatePostForm />

          {!!isLoading && <h2>Loading...</h2>}

          {!isLoading && (
            <>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
