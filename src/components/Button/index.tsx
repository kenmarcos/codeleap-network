import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`btn ${props.className}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
