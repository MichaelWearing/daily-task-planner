import styled from "styled-components";
import { FaRetweet } from "react-icons/fa";

export const Wrapper = styled.div`
  background: royalblue;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  background: lightskyblue;
  height: 85vh;
  width: 90vw;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
`;

export const AddActivityButton = styled.button`
  font-size: 15px;
  font-weight: bold;

  color: #4c00ff;

  border: 2px solid #1f305e;

  height: 35px;
  width: 150px;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;

export const ResetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;
`;

export const ResetButton = styled.button`
  height: 4vh;
  width: 5vh;

  border-radius: 12.5px;

  cursor: pointer;
  transition: "transform 0.15s ease-in-out";

  :hover {
    transform: translateY(-3px);
  }
`;

export const ResetIcon = styled(FaRetweet)`
  & path {
    color: #4c00ff;
  }

  height: 3vh;
  width: 3svh;

  border-radius: 12.5px;

  cursor: pointer;
`;

export const ResetText = styled.h3`
  color: white;
`;
