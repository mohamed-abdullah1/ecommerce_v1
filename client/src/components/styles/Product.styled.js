import styled from "styled-components";

export const Container = styled.div`
  /* flex: 1;
  margin: 10px;
  position: relative;
  background-color: white;
  cursor: pointer;
  border-radius: 15px; */
  /* overflow: hidden; */
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  /* border-radius: 15px; */
  /* padding: 10px; */
  opacity: 1;
  transition: all 1s ease-in-out;
  &:hover {
    opacity: 0.7;
  }
`;
export const Icon = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${(props) =>
    props.type === "favIcon" && props.isInFav ? "red" : "white"};
  color: ${(props) =>
    props.type === "favIcon" && props.isInFav ? "white" : "black"};
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 1s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  opacity: 0;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
  &:active {
    ${(props) =>
      props.type === "fav" &&
      "background : red;     outline-color: transparent;outline-style: solid; box-shadow: 0 0 0 4px #5a01a7;"}
  }
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
export const ImgContainer = styled.div`
  position: relative;
  height: 500px;
  /* width: 400px; */
  width: 100%;
  background: black;
  &:hover ${Icon} {
    opacity: 1;
  }
  /* margin: 40px; */
  border-radius: 15px;
  cursor: pointer;
  /* border: 1px solid red; */
`;
export const ProductInfo = styled.div`
  border: solid yellow 1px;
`;
