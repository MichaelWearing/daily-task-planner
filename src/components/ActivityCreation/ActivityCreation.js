import React from "react";

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

const ActivityCreation = ({ setShowModal }) => {
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
              <Input placeholder="Title" />
            </InputInnerWrapper>
            <InputInnerWrapper>
              <InputHeader>Duration</InputHeader>
              <Input placeholder="Duration" />
            </InputInnerWrapper>
          </InputWrapper>
          <CreateButton>Create</CreateButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default ActivityCreation;
