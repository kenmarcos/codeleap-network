import { Navigate } from "react-router-dom";
import CreatePostForm from "./components/CreatePostForm";
import PostCard from "./components/PostCard";
import { useTypedSelector } from "@/hooks/useTypeSelector";

const Home = () => {
  const { username } = useTypedSelector((store) => store.user);

  if (!username) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="min-h-screen max-w-[800px] mx-auto bg-white">
        <header className="bg-primary py-[27px] px-[37px]">
          <h2 className="text-white">CodeLeap Network</h2>
        </header>

        <div className="p-6 space-y-6">
          <CreatePostForm />

          <PostCard />
        </div>
      </section>
    </>
  );
};

export default Home;
