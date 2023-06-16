import React, { useRef, useId } from "react";

import {
  Wrapper,
  InnerWrapper,
  CloseModalWrapper,
  CloseIcon,
  Title,
  InputWrapper,
  TimerWrapper,
  InputInnerWrapper,
  InputHeader,
  Input,
  TimeInput,
  CreateButton,
} from "./ActivityCreation.styles";

const ActivityCreation = ({
  setShowModal,
  dailyActivities,
  setDailyActivities,
}) => {
  const id = useId();

  const titleRef = useRef();
  const secondsRef = useRef();
  const minutesRef = useRef();
  const hoursRef = useRef();

  const createActivity = () => {
    // Add a check for title and duration being empty
    // Setup so timer takes a valid time

    setDailyActivities([
      ...dailyActivities,
      {
        id: id,
        title: titleRef.current.value,
        duration: {
          hours: hoursRef.current.value,
          minutes: minutesRef.current.value,
          seconds: secondsRef.current.value,
        },
        remainingTime: {
          hours: hoursRef.current.value,
          minutes: minutesRef.current.value,
          seconds: secondsRef.current.value,
        },
      },
    ]);

    setShowModal(false);
  };

  // Stops the user from inputting invalid timers
  const checkForValidTime = (ref) => {
    // When we go > 59 or < 0 error for user
    if (ref.current.value > 59) {
      ref.current.value = 59;
    }
    if (ref.current.value < 0) {
      ref.current.value = 0;
    }
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
              <Input ref={titleRef} type="text" placeholder="Title" />
            </InputInnerWrapper>
            <InputInnerWrapper>
              <InputHeader>Duration</InputHeader>
              <TimerWrapper>
                <TimeInput
                  ref={hoursRef}
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Hours"
                  onChange={() => checkForValidTime(hoursRef)}
                />

                <TimeInput
                  ref={minutesRef}
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Minutes"
                  onChange={() => checkForValidTime(minutesRef)}
                />
                <TimeInput
                  ref={secondsRef}
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Seconds"
                  onChange={() => checkForValidTime(secondsRef)}
                />
              </TimerWrapper>
            </InputInnerWrapper>
          </InputWrapper>
          <CreateButton onClick={() => createActivity()}>Create</CreateButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default ActivityCreation;
