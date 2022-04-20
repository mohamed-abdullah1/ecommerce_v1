import React, { useState } from "react";
import {
  Container,
  Box,
  Title,
  SubTitle,
  TitleContainer,
  InputContainer,
  InputName,
  InputField,
  RememberAndForgetPass,
  BtnContainer,
} from "./styles/Signin.styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "../components/styles/Button.styled";
import { ForgitPassword } from "../components/ForgitPassword";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Signin() {
  const [forgetPass, setForgetPass] = useState(false);

  //function passed to the child component to be able to change the state of the parent state
  const changeForgetPass = (param) => {
    setForgetPass(param);
  };
  return (
    <>
      {!forgetPass ? (
        <Container>
          <Box>
            <TitleContainer>
              <Title>Sign In</Title>
              <SubTitle>Log in to your account to continue.</SubTitle>
            </TitleContainer>
            <InputContainer name="email">
              <InputName>Email Address</InputName>
              <InputField />
            </InputContainer>
            <InputContainer name="password">
              <InputName>Password</InputName>
              <InputField />
            </InputContainer>
            <RememberAndForgetPass>
              <FormControlLabel
                control={<Checkbox {...label} />}
                label="Remember me"
              />
              <p onClick={() => setForgetPass(true)}>Forget Password?</p>
            </RememberAndForgetPass>
            <BtnContainer>
              <Button bgColor="#FFD333">Sign in</Button>
            </BtnContainer>
          </Box>
        </Container>
      ) : (
        <ForgitPassword changeForgetPass={changeForgetPass} />
      )}
    </>
  );
}
