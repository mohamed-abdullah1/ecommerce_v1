import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import {
  Container,
  ImgContainer,
  InfoContainer,
  InfoTitle,
  ButtonContainer,
} from "./styles/Category.styled";
import useFetch from "./customHooks/useFetch";

const Category = ({ category: categoryData }) => {
  const navigate = useNavigate();
  const { data: products } = useFetch("http://localhost:9898/api/products/");
  return (
    <Container>
      <ImgContainer src={categoryData.img} />
      <InfoContainer>
        <InfoTitle>{categoryData.title}</InfoTitle>
        <ButtonContainer>
          {/* <Button>
            <Link
              to={`products/${categoryData.type}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Shop Now
            </Link>
          </Button> */}
          <Button
            sx={{
              bgcolor: "#eaeff2",
              "&:hover": { bgcolor: "#eaefd9" },
              color: "#140005",
              padding: "20px 30px",
            }}
            onClick={() =>
              navigate(`products/${categoryData.type}`, { state: products })
            }
          >
            Show More
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default Category;
