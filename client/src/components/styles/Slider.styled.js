import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 99%;
  display: flex;
  align-items: center;
`;
export const Arrow = styled.div`
  background-color: #fff7f7;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10"}px;
  right: ${(props) => props.direction === "right" && "10"}px;
  opacity: 0.5;
  z-index: 2;
  cursor: pointer;
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  transform: translateX(-${({ sliderIndex }) => sliderIndex * 100}vw);
  transition: all 1s ease;
`;
export const ImgContainer = styled.div`
  flex: 1;
  width: 50vw;
`;
export const Img = styled.img`
  width: 100%;
  height: 90%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  width: 50vw;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Description = styled.p`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 2px;
`;
export const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
`;
