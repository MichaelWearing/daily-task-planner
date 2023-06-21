import React from "react";

import { Wrapper, Title, NumberOfActivitiesText } from "./Activity.styles";

const Activity = ({
  title,
  numberOfActivities,
  setCurrentActivity,
  activity,
}) => {
  return (
    <Wrapper onClick={() => setCurrentActivity(activity.subActivities)}>
      <Title>{title}</Title>
      <NumberOfActivitiesText>
        activities: {numberOfActivities}
      </NumberOfActivitiesText>
    </Wrapper>
  );
};

export default Activity;
