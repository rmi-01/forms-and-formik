import React from "react";

function ErrorMessage({ errors, touched, name }) {
  if (errors[name] && touched[name])
    return <p style={{ color: "red" }}>{errors[name]}</p>;
  return null;
}

export default ErrorMessage;
