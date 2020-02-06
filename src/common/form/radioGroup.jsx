import React from "react";

const RadioGroup = ({ title, value, name, options = [], setFieldValue }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <p>{title}</p>
      {options.map(({ label, inputValue }) => {
        return (
          <div>
            <input
              type="radio"
              name={name}
              value={inputValue}
              checked={value === inputValue}
              onChange={() => setFieldValue(name, inputValue)}
            />
            <span style={{ color: "white", paddingLeft: "10px" }}>{label}</span>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
