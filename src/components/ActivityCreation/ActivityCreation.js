import React, { useRef } from "react";

import {
  Wrapper,
  InnerWrapper,
  CloseModalWrapper,
  CloseIcon,
  Title,
  InputWrapper,
  InputInnerWrapper,
  InputHeader,
  Input,
  CreateButton,
} from "./ActivityCreation.styles";

const ActivityCreation = ({
  setShowModal,
  dailyActivities,
  setDailyActivities,
}) => {
  const titleRef = useRef();
  const durationRef = useRef();

  const createActivity = () => {
    setDailyActivities([
      ...dailyActivities,
      {
        title: titleRef.current.value,
        duration: durationRef.current.value,
      },
    ]);

    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <CloseModalWrapper onClick={() => setShowModal(false)}>
            <CloseIcon />
          </CloseModalWrapper>
          <Title>Create Activity</Title>
          <InputWrapper>
            <InputInnerWrapper>
              <InputHeader>Title</InputHeader>
              <Input ref={titleRef} placeholder="Title" />
            </InputInnerWrapper>
            <InputInnerWrapper>
              <InputHeader>Duration</InputHeader>
              <Input ref={durationRef} placeholder="Duration" />
            </InputInnerWrapper>
          </InputWrapper>
          <CreateButton onClick={() => createActivity()}>Create</CreateButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default ActivityCreation;
