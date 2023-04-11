import { TextareaHTMLAttributes } from "react";

const TextArea = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className="rounded-lg border border-custom-gray-500 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
    ></textarea>
  );
};

export default TextArea;
