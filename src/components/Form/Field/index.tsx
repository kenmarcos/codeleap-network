import React, { FieldsetHTMLAttributes, HTMLAttributes } from "react";

const Field = (props: FieldsetHTMLAttributes<HTMLFieldSetElement>) => {
  return <fieldset {...props} className="flex flex-col" />;
};

export default Field;
