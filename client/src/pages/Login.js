import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Container,
  Wrapper,
  Title,
  Form,
  LinkContainer,
  Link,
} from "./styles/Login.styled";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useFetch from "../components/customHooks/useFetch";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const validationSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const onSubmit = async (data) => {
    // console.log("data", data);
    login(dispatch, data);
    if (!error.trueOrFalse) {
      navigate("/");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="username"
            {...register("username")}
            error={errors.username ? true : false}
            sx={{ width: "100%", marginBottom: 4 }}
          />
          <TextField
            label="password"
            type="password"
            {...register("password")}
            error={errors.password ? true : false}
            sx={{ width: "100%" }}
          />
          <p>{errors.password?.message}</p>
          <Button
            variant="contained"
            type="submit"
            sx={{
              marginTop: 3,
              bgcolor: "#140005",
              "&:hover": { bgcolor: "#35000d" },
              padding: "10px 25px",
            }}
            disabled={isFetching && "true"}
          >
            Login
          </Button>
          <p style={{ color: "red", marginTop: 20 }}>
            {errors.username?.message}
          </p>
          <p style={{ color: "red", marginTop: 20 }}>{error?.msg}</p>
        </Form>
        <LinkContainer>
          <Link onClick={() => navigate("/register")}>Sign Up</Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Login;
