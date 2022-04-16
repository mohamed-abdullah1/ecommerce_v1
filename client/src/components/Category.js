import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 20px;
  position: relative;
`;
const ImgContainer = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  text-align: center;
  font-size: 20px;
`;

const Category = ({ category: categoryData }) => {
  return (
    <Container>
      <ImgContainer src={categoryData.img} />
      <InfoContainer>
        <InfoTitle>{categoryData.title}</InfoTitle>
        <ButtonContainer>
          <Button>
            <Link
              to={`products/${categoryData.type}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              Shop Now
            </Link>
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Container>
  );
};

export default Category;
