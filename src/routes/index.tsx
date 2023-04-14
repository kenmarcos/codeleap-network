import Home from "@/pages/Home";
import Signup from "@/pages/Signup";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
