import React from "react";
import { InputTextStyles } from "./styles";

const Selector = ({
  name,
  label,
  options = [],
  touched = {},
  errors = {},
  ...rest
}) => {
  return (
    <InputTextStyles>
      <label htmlFor={name}>{label}</label>
      <select name={name} {...rest}>
        <option value="" label="Select a color" />
        {options.map(item => (
          <option value={item.id} label={item.name} key={item.id + item.name} />
        ))}
      </select>
      <div>{touched[name] && errors[name] ? errors[name] : null}</div>
    </InputTextStyles>
  );
};
export default Selector;
