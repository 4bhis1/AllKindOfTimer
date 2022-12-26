import React from "react";
import { Link } from "react-router-dom";

import TimerIcon from "@mui/icons-material/Timer";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";

import "./Navigation.css";

let Navigation = () => {
  //   let RemoveClasses = () => {
  //     if (timer.classList.contains("active")) {
  //       timer.classList.remove("active");
  //       console.log("timer removed");
  //     }

  //     if (watch.classList.contains("active")) {
  //       watch.classList.remove("active");
  //       console.log("watch removed");
  //     }

  //     if (stopwatch.classList.contains("active")) {
  //       stopwatch.classList.remove("active");
  //       console.log("Stopwatch removed");
  //     }
  //     console.log("clicked");
  //   };

  //   timer.classList.add("active");

  return (
    <div className="navigation">
      <Link to="timer">
        <div
          className="navigation_icons active"
          id="timer"
          onClick={() => {
            let timer = document.getElementById("timer");
            let watch = document.getElementById("watch");
            let stopwatch = document.getElementById("stopwatch");

            if (watch.classList.contains("active")) {
              watch.classList.remove("active");
              // console.log("watch removed");
            }

            if (stopwatch.classList.contains("active")) {
              stopwatch.classList.remove("active");
              // console.log("Stopwatch removed");
            }

            timer.classList.add("active");
          }}
          title="Timer"
        >
          <TimerIcon />
        </div>
      </Link>
      <Link to="stopwatch">
        <div
          className="navigation_icons"
          id="stopwatch"
          onClick={() => {
            let timer = document.getElementById("timer");
            let watch = document.getElementById("watch");
            let stopwatch = document.getElementById("stopwatch");

            if (timer.classList.contains("active")) {
              timer.classList.remove("active");
              // console.log("timer removed");
            }

            if (watch.classList.contains("active")) {
              watch.classList.remove("active");
              // console.log("watch removed");
            }

            stopwatch.classList.add("active");
          }}
          title="Stopwatch"
        >
          <AccessAlarmsOutlinedIcon />
        </div>
      </Link>
      <Link to="watch">
        <div
          className="navigation_icons"
          id="watch"
          onClick={() => {
            let timer = document.getElementById("timer");
            let watch = document.getElementById("watch");
            let stopwatch = document.getElementById("stopwatch");

            if (timer.classList.contains("active")) {
              timer.classList.remove("active");
              // console.log("timer removed");
            }

            if (stopwatch.classList.contains("active")) {
              stopwatch.classList.remove("active");
              // console.log("Stopwatch removed");
            }

            watch.classList.add("active");
          }}
          title="Watch"
        >
          <QueryBuilderOutlinedIcon />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
