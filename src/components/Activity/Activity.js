import React, { useState } from "react";

import Timer from "../Timer/Timer";

import {
  Wrapper,
  ActivityWrapper,
  Title,
  Description,
  TimerWrapper,
} from "./Activity.styles";

const Activity = ({ id, activity, dailyActivities, setDailyActivities }) => {
  const { title, duration } = activity;
  const [timerComplete, setTimerComplete] = useState(false);

  return (
    <Wrapper timerComplete={timerComplete}>
      <ActivityWrapper>
        <Title>{title}</Title>
        <Description>desc...</Description>
      </ActivityWrapper>
      <TimerWrapper>
        <Timer
          id={id}
          title={title}
          duration={duration}
          dailyActivities={dailyActivities}
          setDailyActivities={setDailyActivities}
          timerComplete={timerComplete}
          setTimerComplete={setTimerComplete}
        />
      </TimerWrapper>
    </Wrapper>
  );
};

export default Activity;
