import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(215, 193, 193, 0.5), rgb(215, 193, 193, 0.5)),
    url("https://source.unsplash.com/random/2150x1200") center no-repeat;
`;
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px;
  padding: 10px;
  font-size: 20px;
`;
const Agreement = styled.div`
  margin-left: 5px;
  font-style: 14px;
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
`;
const Register = () => {
  //states and variables
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState();
  const [makeReq, setMakeReq] = useState(false);
  const navigate = useNavigate();

  //useEffects
  useEffect(() => {
    let trueOrFalse = password === repassword ? true : false;
    setValidated(trueOrFalse);
    console.log(validated, password, repassword);
  }, [password, repassword, validated]);
  useEffect(() => {
    const registerRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9898/api/auth/register",
          {
            email,
            username,
            password,
          }
        );
        console.log("response", res);
      } catch (err) {
        console.log("catch error", err);
      }
    };
    console.log("username:", username, "password:", password, "email:", email);
    registerRequest();
    navigate("/login");
    // if (validated && makeReq && validator.isEmail(email)) {

    // } else {
    // }
  }, [makeReq]);
  //handlers
  const handleClick = () => {
    setMakeReq(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="email"
            required
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <BtnContainer>
          <Button onClick={handleClick}>Create</Button>
        </BtnContainer>
        {/* {!validated && !validator.isEmail(email) && (
          <p style={{ color: "red" }}>Something is wrong</p>
        )} */}
      </Wrapper>
    </Container>
  );
};

export default Register;
