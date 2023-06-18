import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fefaff;
  height: 10vh;

  opacity: ${(props) => (props.timerComplete ? 0.5 : 1)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
  padding: 10px 50px;

  border-radius: 15px;
  border: solid 1px black;
`;

export const ActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;
export const Description = styled.p``;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartTimer = styled.button`
  height: 5vh;
  width: 5vh;

  cursor: pointer;
`;
