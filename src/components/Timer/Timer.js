import React, { useEffect, useState } from "react";

import { Wrapper, StartTimer } from "./Timer.styles";

const Timer = ({
  id,
  title,
  duration,
  dailyActivities,
  setDailyActivities,
  timerComplete,
  setTimerComplete,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(duration.seconds);
  const [remainingMinutes, setRemainingMinutes] = useState(duration.minutes);
  const [remainingHours, setRemainingHours] = useState(duration.hours);

  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    const timerTick = setInterval(() => {
      if (startTimer) {
        if (
          remainingHours === 0 &&
          remainingMinutes === 0 &&
          remainingSeconds === 0
        ) {
          setTimerComplete(true);
        } else {
          if (remainingSeconds > 0) {
            setRemainingSeconds(remainingSeconds - 1);
          } else if (remainingMinutes > 0) {
            setRemainingMinutes(remainingMinutes - 1);
            setRemainingSeconds(59);
          } else if (remainingHours > 0) {
            setRemainingHours(remainingHours - 1);
            setRemainingMinutes(59);
            setRemainingSeconds(59);
          }
        }

        const updatedActivity = {
          title: title,
          duration: {
            hours: remainingHours,
            minutes: remainingMinutes,
            seconds: remainingSeconds,
          },
        };

        const updatedActivityArray = dailyActivities.map((currentActivity) => {
          if (currentActivity.id === id) {
            return updatedActivity;
          } else {
            return currentActivity;
          }
        });

        setDailyActivities(updatedActivityArray);
      }
    }, 1000);

    return () => clearInterval(timerTick);
  }, [remainingSeconds, startTimer]);

  const formateTime = (time) => {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  };

  return (
    <>
      <Wrapper>
        {timerComplete ? (
          <h1>TIME'S UP</h1>
        ) : (
          `${formateTime(remainingHours)}:${formateTime(
            remainingMinutes
          )}:${formateTime(remainingSeconds)}`
        )}
        <StartTimer onClick={() => setStartTimer(!startTimer)} />
      </Wrapper>
    </>
  );
};

export default Timer;
