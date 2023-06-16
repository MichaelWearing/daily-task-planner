import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Wrapper = styled.div`
  background-color: lightgray;

  position: absolute;
  height: 100vh;
  width: 100vw;

  opacity: 0.7;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  background-color: royalblue;

  height: 50vh;
  width: 60vw;

  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CloseModalWrapper = styled.div`
  display: flex;
  align-self: end;
  background: transparent;
  font-size: 35px;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const InputInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputHeader = styled.h3``;

export const Input = styled.input`
  height: 40px;
  width: 350px;

  padding: 0 10px;
`;

export const TimeInput = styled.input`
  height: 40px;
  width: 100px;

  padding: 0 10px;
`;

export const CreateButton = styled.button`
  height: 35px;
  width: 150px;

  border-radius: 10px;

  cursor: pointer;
`;
