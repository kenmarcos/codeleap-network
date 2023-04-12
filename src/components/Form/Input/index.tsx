import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = (props: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      {...props}
      className="w-full rounded-lg border border-custom-gray-500 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary h-8"
      {...register(props.name)}
    />
  );
};

export default Input;
