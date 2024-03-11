import React, { useEffect, useState } from "react";

const ProgressBar = ({ initialValue = 0 }) => {
  const [value, setValue] = useState(initialValue);
  const [isStart, setIsStart] = useState(false);
  const intervalId = React.useRef(null);

  useEffect(() => {
    if (isStart) {
      intervalId.current = setInterval(() => {
        setValue((prevValue) => (prevValue >= 100 ? 0 : prevValue + 1));
      }, 100);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [isStart]);

  const startProgress = () => {
    setIsStart(true);
  };

  const pauseProgress = () => {
    setIsStart(false);
  };

  const resetProgress = () => {
    setValue(0);
  };

  return (
    <div className="progress-bar">
      <div className="progress">
        <span style={{ color: value > 49 ? "white" : "black" }}>
          {value.toFixed()}%
        </span>
        <div
          style={{
            transform: `scaleX(${value / 100})`,
            transformOrigin: "left"
          }}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
        ></div>
      </div>
      <div>
        <button onClick={startProgress}>Start</button>
        <button onClick={pauseProgress}>Pause</button>
        <button onClick={resetProgress}>Reset</button>
      </div>
    </div>
  );
};

export default ProgressBar;
