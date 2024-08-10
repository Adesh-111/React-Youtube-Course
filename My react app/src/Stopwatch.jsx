import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRun, setIsRun] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalId = useRef(null);
  const startTime = useRef(0);

  useEffect(() => {
    if (isRun) {
    intervalId.current =  setInterval(() => {
        setElapsedTime(Date.now() - startTime.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalId.current);
    };
  }, [isRun]);

  function start() {
    setIsRun(true);
    startTime.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRun(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRun(false);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return `${padZero(minutes)}:${padZero(seconds)}:${padZero(milliseconds)}`;
  }

  function padZero(num){
    return (num < 10 ? "0" : "") + num
  }

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start">
            Start
          </button>
          <button onClick={stop} className="stop">
            Stop
          </button>
          <button onClick={reset} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
