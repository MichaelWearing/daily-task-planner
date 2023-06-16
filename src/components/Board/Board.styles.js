import styled from "styled-components";
import { FaBackward } from "react-icons/fa";

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

  /* margin: 50px 50px 5vh 50px; */

  border-radius: 15px;
`;

export const AddActivityButton = styled.button`
  height: 35px;
  width: 150px;

  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  cursor: pointer;
`;

export const ResetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5px;
`;

export const ResetButton = styled.button`
  height: 5vh;
  width: 5vh;

  cursor: pointer;
`;

export const ResetIcon = styled(FaBackward)`
  color: lightskyblue;

  height: 3vh;
  width: 3vh;

  cursor: pointer;
`;

export const ResetText = styled.h3`
  color: white;
`;
