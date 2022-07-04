import React from "react";

const Input = ({ type, value, label, name, changeHandler }) => {
  return (
    <div>
      <h3>{label}</h3>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(e) => changeHandler(name, e.target.value)}
      />
    </div>
  );
};

export default Input;
