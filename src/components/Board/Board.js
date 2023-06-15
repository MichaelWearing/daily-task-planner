import React from "react";

import Activity from "../Activity/Activity";

import {
  Wrapper,
  InnerWrapper,
  AddActivityButton,
  ResetWrapper,
  ResetButton,
  ResetText,
} from "./Board.styles";
import { useState } from "react";

const Board = ({
  dailyActivities,
  setDailyActivities,
  showModal,
  setShowModal,
}) => {
  const [refresh, setRefresh] = useState(false);

  const resetTimers = () => {
    const newDailyAcitives = dailyActivities.map((activity) => {
      return {
        id: activity.id,
        title: activity.title,
        duration: activity.duration,
        remainingTime: activity.duration,
      };
    });
    setDailyActivities(newDailyAcitives);
    setRefresh(!refresh);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        {dailyActivities.map((activity, index) => (
          <Activity
            id={activity.id}
            key={`${activity.title}${index}`}
            activity={activity}
            dailyActivities={dailyActivities}
            setDailyActivities={setDailyActivities}
            refresh={refresh}
          />
        ))}
        <AddActivityButton onClick={() => setShowModal(!showModal)}>
          Add Activity
        </AddActivityButton>
      </InnerWrapper>
      <ResetWrapper>
        <ResetButton onClick={() => resetTimers()} />
        <ResetText>Reset Timers</ResetText>
      </ResetWrapper>
    </Wrapper>
  );
};

export default Board;
