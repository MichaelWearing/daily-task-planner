import React from "react";

import Activity from "../Activity/Activity";

import { Wrapper, InnerWrapper } from "./Board.styles";

const Board = ({ dailyActivities }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {dailyActivities.map((activity, index) => (
          <Activity key={`${activity.title}${index}`} activity={activity} />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

export default Board;
