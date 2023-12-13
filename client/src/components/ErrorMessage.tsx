import React from "react";

const ErrorMessage = (props: any) => {
  return (
    <span className="error-message">{props.message}</span>
  );
};

export default ErrorMessage;