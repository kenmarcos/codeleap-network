import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="rounded-lg border border-custom-gray-500 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
};

export default Input;
