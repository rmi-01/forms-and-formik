import React from "react";

function ErrorMessage({ errors, touched, name }) {
  if (errors[name] && touched[name])
    return (
      <p
        style={{
          color: "red",
          fontSize: 12,
          margin: "2px 0px",
        }}
      >
        {errors[name]}
      </p>
    );
  return null;
}

export default ErrorMessage;
