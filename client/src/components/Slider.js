import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { sliderItems } from "../data";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 100vh;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 99%;
  display: flex;
  align-items: center;
`;
const Arrow = styled.div`
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

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  transform: translateX(-${({ sliderIndex }) => sliderIndex * 100}vw);
  transition: all 1s ease;
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 50vw;
`;
const Img = styled.img`
  width: 100%;
  height: 90%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  width: 50vw;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
`;
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const navigate = useNavigate();
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex > 0 ? sliderIndex - 1 : sliderItems.length - 1
      );
    } else {
      setSliderIndex(
        sliderIndex < sliderItems.length - 1 ? sliderIndex + 1 : 0
      );
    }
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftIcon style={{ fontSize: 30 }} />
          </Arrow>
          {sliderItems.map((sliderItem) => (
            <Slide
              key={sliderItem.id}
              bg={sliderItem.bg}
              sliderIndex={sliderIndex}
            >
              <ImgContainer>
                <Img src={sliderItem.img}></Img>
              </ImgContainer>
              <InfoContainer>
                <Title>{sliderItem.title}</Title>
                <Description>{sliderItem.desc}</Description>
                <Button
                  onClick={() => navigate(`/products/${sliderItem.category}`)}
                >
                  Show More
                </Button>
              </InfoContainer>
            </Slide>
          ))}
          <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightIcon style={{ fontSize: 30 }} />
          </Arrow>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Slider;
