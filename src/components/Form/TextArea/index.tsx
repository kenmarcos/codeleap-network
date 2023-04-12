import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="rounded-lg border border-custom-gray-500 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
    ></textarea>
  );
};

export default TextArea;
