import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    return (
      <button
        {...props}
        className={`btn ${props.className}`}
        ref={forwardedRef}
      >
        {props.children}
      </button>
    );
  }
);

export default Button;
