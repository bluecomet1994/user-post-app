import React from "react";

const Input = (props: any) => {
  const { type, placeholder, defaultValue, form, error } = props;

  return (
    <div className="input-container">
      <input type={type} placeholder={placeholder} {...form} defaultValue={defaultValue} />

      <p>{error && error.message}</p>
      <span className="bar" />
      <span className="highlight" />
    </div>
  );
};

export default Input;