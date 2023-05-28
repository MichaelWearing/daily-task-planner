import React, { useEffect, useState } from "react";

import { Wrapper, StartTimer } from "./Timer.styles";

const Timer = ({ duration }) => {
  const [remainingTime, setRemainingTime] = useState(duration);
  const [timerComplete, setTimerComplete] = useState(false);
  const [startTimer, setStartTimer] = useState(false);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  useEffect(() => {
    const timerTick = setInterval(() => {
      if (startTimer) {
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            setTimerComplete(true);
          } else {
            return prevTime - 1;
          }
        });
      }
    }, second);

    return () => clearInterval(timerTick);
  }, [remainingTime, startTimer]);

  return (
    <>
      <Wrapper>
        {timerComplete ? <h1>TIME'S UP</h1> : remainingTime}
        <StartTimer onClick={() => setStartTimer(!startTimer)} />
      </Wrapper>
    </>
  );
};

export default Timer;
