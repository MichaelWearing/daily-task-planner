import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fefaff;
  height: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;
  padding: 10px 50px;

  border-radius: 15px;
  border: solid 1px black;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const Title = styled.h2`
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NumberOfActivitiesText = styled.h4`
  color: darkgray;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
