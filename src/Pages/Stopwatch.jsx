import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MoreNumber = (number) =>
  number < 10 && number > -10 ? `0${number}` : number;

let Stopwatch = () => {
  let [timer, updateTimer] = useState({
    hr: "",
    min: "",
    sec: "",
    ms: "",
  });

  let [flag, updateFlag] = useState([]);

  // let setCallbackRefernce = useCallback()

  const [playPause, updatePlayPause] = useState();

  let clicked = () => {
    console.log("Clicked here");
    if (!playPause) {
      const tempTimer = {
        hr: timer.hr ? timer.hr : 0,
        min: timer.min ? timer.min : 0,
        sec: timer.sec ? timer.sec : 0,
        ms: timer.ms ? timer.ms : 0,
      };
      updateTimer({ ...tempTimer });
      updatePlayPause(setInterval(Decrease, 10));
    } else {
      updatePlayPause(clearInterval(playPause));
    }
  };

  // console.log(">>> timrt", timer);

  let Decrease = () => {
    // if (!timer.hr && !timer.min && !timer.sec && !timer.ms) {
    //   console.log("timer", timer);
    //   updatePlayPause((data) => {
    //     return clearInterval(data);
    //   });
    // } else {
    if (timer.min === 60 && timer.sec === 60 && timer.ms === 60) {
      timer.hr++;
      timer.min = 0;
      timer.sec = 0;
      timer.ms = 0;
      updateTimer({ ...timer });
    }
    if (timer.sec === 60 && timer.ms === 60) {
      timer.min++;
      timer.sec = 0;
      timer.ms = 0;
      updateTimer({ ...timer });
    }
    if (timer.ms === 100) {
      timer.sec++;
      timer.ms = 0;
      updateTimer({ ...timer });
    }

    // if (timer.s >= 0) {
    timer.ms++;
    updateTimer({ ...timer });
    // }S
    // }
  };

  useEffect(() => {
    document.title = "StopWatch";
  }, []);

  console.log("Flag", flag);

  return (
    <>
      <form className="timer" onSubmit={clicked}>
        <input
          readOnly={true}
          type="text"
          name="hr"
          placeholder="00"
          maxLength="2"
          onChange={(e) => {
            updateTimer({ ...timer, hr: parseInt(e.target.value) });
          }}
          value={timer.hr}
          style={styles.timer}
        />
        <input
          readOnly={true}
          type="text"
          name="min"
          placeholder="00"
          maxLength="2"
          onChange={(e) => {
            updateTimer({ ...timer, min: parseInt(e.target.value) });
          }}
          value={timer.min}
          style={styles.timer}
        />
        <input
          readOnly={true}
          type="text"
          name="sec"
          placeholder="00"
          maxLength="2"
          onChange={(e) => {
            updateTimer({ ...timer, sec: parseInt(e.target.value) });
          }}
          value={timer.sec}
          style={styles.timer}
        />
        <input
          readOnly={true}
          type="text"
          name="ms"
          placeholder="00"
          maxLength="2"
          value={timer.ms}
          style={styles.timer}
        />
      </form>

      <div className="buttons">
        <Button
          variant="outlined"
          size="large"
          startIcon={playPause ? <PlayArrowIcon /> : <PauseOutlinedIcon />}
          style={{ marginRight: "20px" }}
          onClick={clicked}
        >
          {playPause ? "Play" : "Pause"}
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<RestartAltOutlinedIcon />}
          style={{ marginRight: "20px" }}
          onClick={() => {
            timer.hr = 0;
            timer.min = 0;
            timer.sec = 0;
            timer.ms = 0;
            updatePlayPause((data) => {
              return clearInterval(data);
            });

            updateTimer({ ...timer });
          }}
        >
          Reset
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<EmojiFlagsOutlinedIcon />}
          onClick={() => {
            flag.push(
              `${MoreNumber(timer.hr)}:${MoreNumber(timer.min)}:${MoreNumber(
                timer.sec
              )}:${MoreNumber(timer.ms)}`
            );
          }}
        >
          Flag
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "ghostwhite",
          padding: 10,
        }}
      >
        {flag &&
          flag.map((x, index) => (
            <div
              style={{ padding: 5, fontSize: 22, display: "flex" }}
              key={index}
            >
              <div
                style={{
                  marginRight: 10,
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <EmojiFlagsOutlinedIcon style={{ height: 15, width: 15 }} />
              </div>
              {x}
            </div>
          ))}
      </div>
    </>
  );
};

export default Stopwatch;

const styles = {
  timer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    outline: "none",
    borderWidth: 0,
    fontSize: 50,
    backgroundColor: "ghostWhite",
    width: 80,
  },
};
