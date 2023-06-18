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

  const invalidInput = (ref) => {
    ref.current.focus();
    ref.current.style.border = "4px solid #4C00FF";
  };

  const createActivity = () => {
    // Perform Checks to make sure all fields are filled in
    if (titleRef.current.value.length === 0) {
      invalidInput(titleRef);
      return;
    }
    if (hoursRef.current.value.length === 0) {
      invalidInput(hoursRef);
      return;
    }
    if (minutesRef.current.value.length === 0) {
      invalidInput(minutesRef);
      return;
    }
    if (secondsRef.current.value.length === 0) {
      invalidInput(secondsRef);
      return;
    }

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
      <Wrapper onClick={() => setShowModal(false)}>
        <InnerWrapper onClick={(e) => e.stopPropagation()}>
          <CloseModalWrapper onClick={() => setShowModal(false)}>
            <CloseIcon />
          </CloseModalWrapper>
          <Title>Create Activity</Title>
          <InputWrapper>
            <InputInnerWrapper>
              <InputHeader>Title</InputHeader>
              <Input autoFocus ref={titleRef} type="text" placeholder="Title" />
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
