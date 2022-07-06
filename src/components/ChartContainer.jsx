import React from "react";
import { useSelector } from "react-redux";

const ChartContainer = () => {
  const data = useSelector((state) => state.listData.listData);

  return (
    <div className="chartContainer">
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.sleepTime}</div>
          <div>{item.awakeTime}</div>
        </div>
      ))}
    </div>
  );
};

export default ChartContainer;
