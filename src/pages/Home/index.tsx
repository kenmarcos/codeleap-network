import { Navigate } from "react-router-dom";
import CreatePostForm from "./components/CreatePostForm";
import { useEffect } from "react";
import { getPostsThunk } from "@/actions/post/thunks";
import { resetPosts } from "@/actions/post/actions";
import PostsList from "./components/PostsList";
import { useHome } from "./useHome";

const Home = () => {
  const { username, dispatch } = useHome();

  if (!username) {
    return <Navigate to="/" />;
  }

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

        <div className="p-6 pb-[27px] space-y-6">
          <CreatePostForm />

          <PostsList />
        </div>
      </section>
    </>
  );
};

export default Home;
