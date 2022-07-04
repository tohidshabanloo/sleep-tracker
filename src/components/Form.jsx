import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [formData, setFormData] = useState({ sleep: "", awake: "" });
  const changeHandler = (key, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  console.log(changeHandler);
  
  return (
    <div>
      <Input
        value={formData.sleep}
        label={"ساعت خواب"}
        type={"time"}
        changeHandler={changeHandler}
      />
      <Input
        value={formData.awake}
        label={"ساعت بیداری"}
        type={"time"}
        changeHandler={changeHandler}
      />
    </div>
  );
};

export default Form;
