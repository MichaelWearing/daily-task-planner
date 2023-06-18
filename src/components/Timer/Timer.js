import React, { useEffect, useState } from "react";

import {
  Wrapper,
  PlayIcon,
  PauseIcon,
  DeleteIcon,
  TimeText,
} from "./Timer.styles";

const Timer = ({
  id,
  title,
  duration,
  remainingTime,
  dailyActivities,
  setDailyActivities,
  timerComplete,
  setTimerComplete,
  refresh,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(
    remainingTime.seconds
  );
  const [remainingMinutes, setRemainingMinutes] = useState(
    remainingTime.minutes
  );
  const [remainingHours, setRemainingHours] = useState(remainingTime.hours);

  const [startTimer, setStartTimer] = useState(false);

  // Resets the Timers to original duration refresh button click
  useEffect(() => {
    setRemainingHours(duration.hours);
    setRemainingMinutes(duration.minutes);
    setRemainingSeconds(duration.seconds);
    setTimerComplete(false);
    setStartTimer(false);
    // eslint-disable-next-line
  }, [refresh]);

  // Timers tick down every second
  //	Only runs if one of the timers is active
  useEffect(() => {
    const timerTick = setInterval(() => {
      if (startTimer) {
        if (
          remainingHours === 0 &&
          remainingMinutes === 0 &&
          remainingSeconds === 0
        ) {
          setTimerComplete(true);
          setStartTimer(false);
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

        // Prpares the acitivty to be updated
        const updatedActivity = {
          id: id,
          title: title,
          duration: {
            hours: duration.hours,
            minutes: duration.minutes,
            seconds: duration.seconds,
          },
          remainingTime: {
            hours: remainingHours,
            minutes: remainingMinutes,
            seconds: remainingSeconds,
          },
        };

        // Checks for which activity to update
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
    // eslint-disable-next-line
  }, [remainingSeconds, startTimer]);

  const deleteActivity = () => {
    console.log(dailyActivities);

    const updatedActivityArray = dailyActivities.filter((currentActivity) => {
      if (currentActivity.id !== id) {
        return currentActivity;
      } else {
        return false;
      }
    });

    console.log(updatedActivityArray);
    setDailyActivities(updatedActivityArray);
  };

  // Adds a 0 before single digit numbers
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
          <TimeText>
            {formateTime(remainingHours)}:{formateTime(remainingMinutes)}:
            {formateTime(remainingSeconds)}
          </TimeText>
        )}
        {startTimer ? (
          <PauseIcon onClick={() => setStartTimer(!startTimer)} />
        ) : (
          <PlayIcon onClick={() => setStartTimer(!startTimer)} />
        )}
        <DeleteIcon onClick={() => deleteActivity()} />
      </Wrapper>
    </>
  );
};

export default Timer;
