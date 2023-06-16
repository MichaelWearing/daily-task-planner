import styled from "styled-components";
import { FaPlay, FaPause, FaTrash } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 25vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PlayIcon = styled(FaPlay)`
  color: white;

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;
`;

export const PauseIcon = styled(FaPause)`
  color: white;

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;
`;

export const DeleteIcon = styled(FaTrash)`
  color: white;

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;
`;
