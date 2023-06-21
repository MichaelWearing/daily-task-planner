import React, { useState } from "react";

import Timer from "../Timer/Timer";

import {
  Wrapper,
  ActivityWrapper,
  Title,
  TimerWrapper,
} from "./SubActivity.styles";

const SubActivity = ({
  id,
  activity,
  dailyActivities,
  setDailyActivities,
  refresh,
}) => {
  const { title, duration, remainingTime } = activity;
  const [timerComplete, setTimerComplete] = useState(false);

  return (
    <Wrapper timerComplete={timerComplete}>
      <ActivityWrapper>
        <Title>{title}</Title>
      </ActivityWrapper>
      <TimerWrapper>
        <Timer
          id={id}
          title={title}
          duration={duration}
          remainingTime={remainingTime}
          dailyActivities={dailyActivities}
          setDailyActivities={setDailyActivities}
          timerComplete={timerComplete}
          setTimerComplete={setTimerComplete}
          refresh={refresh}
        />
      </TimerWrapper>
    </Wrapper>
  );
};

export default SubActivity;
