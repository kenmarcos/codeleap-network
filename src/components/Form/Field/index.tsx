import React, { HTMLAttributes } from "react";

const Field = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className="flex flex-col gap-2" />;
};

export default Field;
