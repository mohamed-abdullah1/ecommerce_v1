import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { categories } from "../data.js";
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin-top: 40px;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
