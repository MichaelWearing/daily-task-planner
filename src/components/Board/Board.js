import React from "react";

import Activity from "../Activity/Activity";

import { Wrapper, InnerWrapper, AddActivityButton } from "./Board.styles";

const Board = ({
  dailyActivities,
  dailyActivitiesTest,
  showModal,
  setShowModal,
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {/* {dailyActivities.map((activity, index) => (
          <Activity key={`${activity.title}${index}`} activity={activity} />
        ))} */}
        {dailyActivitiesTest.map((activity, index) => (
          <Activity key={`${activity.title}${index + 1}`} activity={activity} />
        ))}
        <AddActivityButton onClick={() => setShowModal(!showModal)}>
          Add Activity
        </AddActivityButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Board;
