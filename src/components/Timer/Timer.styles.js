import styled from "styled-components";
import { FaPlay, FaPause, FaTrash } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 40vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PlayIcon = styled(FaPlay)`
  & path {
    color: #4c00ff;
  }

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;

export const PauseIcon = styled(FaPause)`
  & path {
    color: #4c00ff;
  }

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;

export const DeleteIcon = styled(FaTrash)`
  & path {
    color: #4c00ff;
  }

  height: 2.5vh;
  width: 2.5vh;

  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }
`;

export const TimeText = styled.p`
  font-size: 25px;
`;
