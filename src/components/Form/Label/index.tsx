import { LabelHTMLAttributes } from "react";

const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label {...props} className="leading-[19px]" />;
};

export default Label;
