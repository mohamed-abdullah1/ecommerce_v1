import { keyframes } from "styled-components";
import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-family: "Press Start 2P", cursive;

  & > p {
    font-family: "Press Start 2P", cursive;
    color: #54fe55;
    font-size: 3rem;
    font-weight: 900;
    text-shadow: 0 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const motion = keyframes`
0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
export const Blink = styled.div`
  /* border: red solid 1px; */
  font-family: "Press Start 2P", cursive;
  width: 100%;
  font-size: 5rem;
  margin-left: 20%;
  margin-bottom: 10px;
  & > span {
    animation: ${motion} 1s linear infinite;
  }
`;
export const Number = styled.span`
  font-family: "Press Start 2P", cursive;
  font-size: 9rem;
`;
