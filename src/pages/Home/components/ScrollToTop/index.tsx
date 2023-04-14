import Button from "@/components/Button";
import { ArrowUp } from "phosphor-react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className="btn-outline-white rounded-full p-1 fixed bottom-4 right-10"
      onClick={scrollToTop}
    >
      <ArrowUp size={30} />
    </Button>
  );
};

export default ScrollToTop;
