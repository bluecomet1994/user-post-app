import React from "react";

const Button = (props: any) => {
  return (
    <button {...props}>
      <span />
      <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full transition-all">
        {props.children}
      </div>
    </button>
  );
};

export default Button;