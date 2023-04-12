import { useTypedSelector } from "@/hooks/useTypeSelector";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { username } = useTypedSelector((store) => store.user);

  if (!username) {
    return <Navigate to="/" />;
  }

  return <div>{username}</div>;
};

export default Home;
