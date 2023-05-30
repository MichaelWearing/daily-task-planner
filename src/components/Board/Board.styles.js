import styled from "styled-components";

export const Wrapper = styled.div`
  background: royalblue;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  background: lightskyblue;
  height: 90vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  margin: 50px;

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
`;
