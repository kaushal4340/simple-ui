import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ label, classnames, others }) => {
  return (
    <button className={classNames("simple-button", classnames)} {...others}>
      {label}
    </button>
  );
};
export default Button;
