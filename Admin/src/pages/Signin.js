import { useEffect } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import {
  Container,
  Form,
  SignContent,
  Title,
  TitleContainer,
} from "./styles/Signin.styled";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  //variables
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const { currentUser, fetching, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  //handlers
  const onSubmit = (user) => {
    console.log(user);
    login(dispatch, user);
  };
  //useEffect
  useEffect(() => {
    if (currentUser && !fetching && !error.trueOrFalse) {
      navigate("/");
    }
    console.log("error", error);
  }, [currentUser, fetching, error]);
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TitleContainer>
          <Title>Sign in </Title>
          <p>Log in to your account as Admin to continue.</p>
        </TitleContainer>
        <SignContent>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                autoFocus={true}
                type="text"
                label="Username"
                sx={{ width: "100%", marginTop: 2 }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                sx={{ width: "100%", marginTop: 2 }}
              />
            )}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: 3,
              marginLeft: 15,
              padding: "15px 30px",
              bgcolor: "#060b26",
              "&:hover": {
                bgcolor: "#1a83ff",
              },
            }}
          >
            Sign in
          </Button>
          {error.trueOrFalse && (
            <div
              style={{
                color: "red",
                fontSize: "15px",
                marginTop: "9px",
                textAlign: "center",
              }}
            >
              {error.errMsg?.msg}
            </div>
          )}
        </SignContent>
      </Form>
    </Container>
  );
};

export default Signin;
