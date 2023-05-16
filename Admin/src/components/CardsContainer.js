import React from "react";
import { Wrapper } from "./styles/Container.styled";
import Card from "./Card";

const cardsItems = ["Product", "User", "Order"];

const Container = () => {
  return (
    <Wrapper>
      {cardsItems.map((card) => (
        <Card name={card} />
      ))}
    </Wrapper>
  );
};

export default Container;