import React from "react";
import { InputTextStyles } from "./styles";

/*
  Mandatory fields: 
    type,
    onChange,
    onBlur,
    value,
    id,
*/

const InputText = ({
  label = "Default Label",
  name,
  errors = {},
  touched = {},
  ...rest
}) => {
  return (
    <InputTextStyles>
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} />
      <div>{touched[name] && errors[name] ? errors[name] : null}</div>
    </InputTextStyles>
  );
};

export default InputText;
