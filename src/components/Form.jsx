import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import listData from "../redux/listData/listData";

const Form = () => {
  const data = useSelector((state) => state.listData.listData);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ sleep: "", awake: "" });
  const changeHandler = (key, value) => {
    setFormData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitHandler = () => {
    dispatch(listData(formData));
  };
  console.log(data);
  return (
    <div className="formContainer">
      <div className="inputs">
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
      <Button children={"ثبت"} className={"button"} onClick={submitHandler} />
    </div>
  );
};

export default Form;
