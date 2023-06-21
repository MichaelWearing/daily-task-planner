import React, { useRef } from "react";

import SubActivity from "../SubActivity/SubActivity";
import Activity from "../Activity/Activity";

import {
  Wrapper,
  HeaderWrapper,
  BackButtonWrapper,
  BackButton,
  BackIcon,
  HeaderText,
  HeaderFiller,
  InnerWrapper,
  AddActivityButton,
  ResetWrapper,
  ResetButton,
  ResetIcon,
  ResetText,
} from "./Board.styles";
import { useState } from "react";

const Board = ({
  currentActivity,
  setCurrentActivity,
  mikeyArray,
  setMikeyArray,
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
      <HeaderWrapper>
        <BackButtonWrapper>
          {currentActivity !== null && (
            <BackButton onClick={() => setCurrentActivity(null)}>
              <BackIcon />
            </BackButton>
          )}
        </BackButtonWrapper>
        <HeaderText>Title</HeaderText>
        <HeaderFiller />
      </HeaderWrapper>
      <InnerWrapper>
        {currentActivity !== null
          ? currentActivity.map((activity, index) => (
              <SubActivity
                id={activity.id}
                key={`${activity.title}${index}`}
                activity={activity}
                dailyActivities={dailyActivities}
                setDailyActivities={setDailyActivities}
                refresh={refresh}
              />
            ))
          : mikeyArray.map((activity, index) => (
              <Activity
                key={`${activity.ActivityTitle}${index}`}
                title={activity.ActivityTitle}
                numberOfActivities={activity.subActivities.length}
                setCurrentActivity={setCurrentActivity}
                activity={activity}
              />
            ))}
        <AddActivityButton
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
