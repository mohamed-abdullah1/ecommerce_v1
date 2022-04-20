import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Box,
  BtnContainer,
  InputContainer,
  InputField,
  InputName,
  RememberAndForgetPass,
  SubTitle,
  Title,
  TitleContainer,
} from "../pages/styles/Signin.styled";
import { Button } from "./styles/Button.styled";

export const ForgitPassword = ({ changeForgetPass }) => {
  //handlers
  const handleClick = () => {
    changeForgetPass(false);
  };
  return (
    <Container>
      <Box name="forgetPassCom">
        <TitleContainer>
          <Title>Forgot password?</Title>
          <SubTitle name="forgetPassCom">
            Enter the email address associated with your account and we will
            send a link to reset your password.
          </SubTitle>
        </TitleContainer>
        <InputContainer>
          <InputName>Email Address</InputName>
          <InputField />
        </InputContainer>
        <BtnContainer>
          <Button bgColor="#FFD333" onClick={handleClick}>
            Reset Password
          </Button>
        </BtnContainer>
        <RememberAndForgetPass>
          <div>Remember your password?</div>
          <p onClick={handleClick}>Sign in</p>
        </RememberAndForgetPass>
      </Box>
    </Container>
  );
};
