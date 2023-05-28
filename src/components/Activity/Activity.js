import React from "react";

import Timer from "../Timer/Timer";

import {
  Wrapper,
  ActivityWrapper,
  Title,
  Description,
  TimerWrapper,
} from "./Activity.styles";

const Activity = ({ activity }) => {
  const { title, duration } = activity;

  return (
    <Wrapper>
      <ActivityWrapper>
        <Title>{title}</Title>
        <Description>desc...</Description>
      </ActivityWrapper>
      <TimerWrapper>
        <Timer duration={duration} />
      </TimerWrapper>
    </Wrapper>
  );
};

export default Activity;
