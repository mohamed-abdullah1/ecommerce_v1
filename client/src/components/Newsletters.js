import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 100px;
  font-weight: 900;
`;
const Description = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
  text-align: center;
`;
const InputContainer = styled.div`
  width: 30%;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  flex: 9;
  padding: 10px 20px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
`;

const Newsletters = () => {
  return (
    <Container>
      <Title>Newsletters</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletters;
