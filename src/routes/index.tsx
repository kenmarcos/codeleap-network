import Signup from "@/pages/Signup";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
  );
};

export default Router;
