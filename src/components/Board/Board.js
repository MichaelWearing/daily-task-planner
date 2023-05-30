import React from "react";

import Activity from "../Activity/Activity";

import { Wrapper, InnerWrapper, AddActivityButton } from "./Board.styles";

const Board = ({ dailyActivities, showModal, setShowModal }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {dailyActivities.map((activity, index) => (
          <Activity key={`${activity.title}${index}`} activity={activity} />
        ))}
        <AddActivityButton onClick={() => setShowModal(!showModal)}>
          Add Activity
        </AddActivityButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Board;
