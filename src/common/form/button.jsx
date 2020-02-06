import React from "react";
import { ButtonStyles } from "./styles";

/*
  Mandatory fields: 
    type,
    onChange,
    onBlur,
    value,
    id,
*/

const Button = ({ children }) => {
  return <ButtonStyles type="submit">{children}</ButtonStyles>;
};

export default Button;
