import React, { useState, useEffect } from "react";

import "./Timer.css";

let Time = () => {
  let [time, updateTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    document.title = "Time";

    let temp = setInterval(() => {
      updateTime(new Date().toLocaleTimeString());
    }, 1000);

    return clearInterval(temp);
  }, []);

  return (
    <>
      <div className="timer" style={{ fontSize: "80px" }}>
        <h1>{time}</h1>
      </div>
    </>
  );
};

export default Time;
