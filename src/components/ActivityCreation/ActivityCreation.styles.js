import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: absolute;
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerWrapper = styled.div`
  border-radius: 30px;
  background-color: #009ff5;
  opacity: 1;

  height: 50vh;
  width: 60vw;

  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    height: 40vh;
    width: 90vw;

    padding: 40px 10px;

    justify-content: space-between;
  }
`;

export const CloseModalWrapper = styled.div`
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  font-size: 35px;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`;

export const PlaceHolderLeft = styled.div`
  flex: 1;
`;

export const CloseIcon = styled(FaTimes)`
  flex: 1;

  & path {
    color: white;
  }

  :hover {
    transform: translateY(-3px);
  }
`;

export const Title = styled.h1`
  flex: 3;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (max-width: 768px) {
    gap: 25px;
  }
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
  border-radius: 5px;
  border: 0;

  height: 40px;
  width: 350px;

  padding: 0 10px;
`;

export const TimeInput = styled.input`
  border-radius: 5px;
  border: 0;

  height: 40px;
  width: 100px;

  padding: 0 10px;
`;

export const CreateButton = styled.button`
  color: #4c00ff;

  font-size: 15px;
  font-weight: bold;

  border: 2px solid #1f305e;
  border-radius: 10px;

  height: 35px;
  width: 150px;

  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;
