import { useState } from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { sliderItems } from "../data";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Arrow,
  Slide,
  ImgContainer,
  InfoContainer,
  Img,
  Description,
  Title,
} from "./styles/Slider.styled";
import Button from "@mui/material/Button";
import useFetch from "./customHooks/useFetch";
const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const navigate = useNavigate();
  const { data: products } = useFetch("http://localhost:9898/api/products/");
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
                  sx={{
                    bgcolor: "#140005",
                    "&:hover": { bgcolor: "#35000d" },
                    color: "white",
                    padding: "20px 30px",
                  }}
                  onClick={() =>
                    navigate(`/products/${sliderItem.category}`, {
                      state: products,
                    })
                  }
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
