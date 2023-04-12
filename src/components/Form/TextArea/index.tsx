import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const TextArea = (props: TextAreaProps) => {
  const { register } = useFormContext();

  return (
    <textarea
      {...props}
      className="rounded-lg border border-custom-gray-500 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
      {...register(props.name)}
    ></textarea>
  );
};

export default TextArea;
