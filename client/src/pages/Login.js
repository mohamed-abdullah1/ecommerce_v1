import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(215, 193, 193, 0.5), rgb(215, 193, 193, 0.5)),
    url("https://source.unsplash.com/random/2150x1600") center no-repeat;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  flex: 1;
  width: 50%;
  margin: 5px;
  padding: 10px;
  font-size: 20px;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Link = styled.span`
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
const Button = styled.button`
  width: 20%;
  text-align: center;
  border: 1px solid teal;
  background-color: teal;
  color: white;
  padding: 10px 15px;
  &:disabled {
    cursor: not-allowed;
    background-color: green;
  }
`;
const Error = styled.div`
  color: red;
`;
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const user = useSelector((state) => state.user.currentUser);
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("username: ", username, "password:", password);
    login(dispatch, { username, password });
    user && navigate("/");
  };
  useEffect(() => {
    setTimeout(() => {
      user && navigate("/");
    }, 1000);
  });

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <LinkContainer>
          <Link onClick={() => navigate("/register")}>Sign Up</Link>
        </LinkContainer>
        <BtnContainer>
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
        </BtnContainer>
        {error && <Error>Something is wrong</Error>}
      </Wrapper>
    </Container>
  );
};

export default Login;
