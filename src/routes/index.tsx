import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Router;
