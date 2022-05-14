import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid black;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const NavBars = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #060b26;
  padding: 20px 5px;
  height: 7vh;
  & > button {
    color: white;
    flex: 3;
    display: flex;
    justify-content: start;
  }
  & > div {
    color: white;
    flex: 3;
    text-align: center;
  }
`;
export const NavMenuContainer = styled.div`
  z-index: 10000;
  background-color: #060b26;
  height: 100vh;
  width: 14vw;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  left: ${(props) => (props.slider ? "0" : "-100%")};
  & > ul > li {
    list-style: none;
  }
  & > ul {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
  & > ul > li:not(:nth-child(1)) {
    /* margin-left: 20px; */
    width: 100%;
    padding: 10px 20px;
    border-radius: 4px;
    transition: all ease-in-out 0.5s;
    &:hover {
      background-color: #1a83ff;
    }
  }
  & > ul > li:nth-child(1) > a {
    color: #f5f5f5;
    display: flex;
    justify-content: flex-start;
    width: 18vw;
    margin-bottom: 10px;
  }
  & > ul > li:not(:nth-child(1)) {
    & > a {
      color: #f5f5f5;
      display: flex;
      align-items: center;
      width: 10vw;
      font-size: 22px;
      text-decoration: none;
      width: 100%;
      & > span {
        margin-left: 10px;
      }
    }
  }
`;
export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  /* border: solid red 1px; */
  & > div {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > p {
      /* border: 1px solid yellow; */
      margin-top: 5%;
    }
  }
`;
