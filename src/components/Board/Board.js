import React, { useRef } from "react";

import Activity from "../Activity/Activity";

import {
  Wrapper,
  InnerWrapper,
  AddActivityButton,
  ResetWrapper,
  ResetButton,
  ResetIcon,
  ResetText,
} from "./Board.styles";
import { useState } from "react";

const Board = ({
  dailyActivities,
  setDailyActivities,
  showModal,
  setShowModal,
}) => {
  const addActivityRef = useRef();
  const [refresh, setRefresh] = useState(false);

  // On reset button click, set all timers remaining time to original duration
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
        <AddActivityButton // Shows in the modal until mouse is moved
          ref={addActivityRef}
          onClick={() => {
            addActivityRef.current.blur();
            setShowModal(!showModal);
          }}
        >
          Add Activity
        </AddActivityButton>
      </InnerWrapper>
      <ResetWrapper>
        <ResetButton onClick={() => resetTimers()}>
          <ResetIcon />
        </ResetButton>
        <ResetText>Reset Timers</ResetText>
      </ResetWrapper>
    </Wrapper>
  );
};

export default Board;
