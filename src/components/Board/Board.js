import React from "react";

import Activity from "../Activity/Activity";

import { Wrapper, InnerWrapper, AddActivityButton } from "./Board.styles";

const Board = ({
  dailyActivities,
  setDailyActivities,
  showModal,
  setShowModal,
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {dailyActivities.map((activity, index) => (
          <Activity
            id={`${activity.title}${index}`}
            key={`${activity.title}${index}`}
            activity={activity}
            dailyActivities={dailyActivities}
            setDailyActivities={setDailyActivities}
          />
        ))}
        <AddActivityButton onClick={() => setShowModal(!showModal)}>
          Add Activity
        </AddActivityButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Board;
