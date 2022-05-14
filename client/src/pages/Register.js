import { useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form } from "./styles/Register.styled";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [postResMsg, setErrorOfResponse] = useState(null);
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("username is required")
      .min(5, "at least 5 characters")
      .max(20, "can't exceed 20 characters"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "at least 6 characters")
      .max(20, "can't exceed 20 characters"),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .oneOf(
        [yup.ref("password"), null],
        "confirm password doesn't match with the password"
      ),
    email: yup
      .string()
      .required("email is required")
      .email("it doesn't seem a valid email"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (formData) => {
    axios
      .post("http://localhost:9898/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        setErrorOfResponse({ error: false, msg: "user added Successfully" });
        console.log("creating new user res", res);

        return axios.all([
          axios.post("http://localhost:9898/api/favorites/", {
            userId: res.data._id,
            products: [],
          }),
          axios.post("http://localhost:9898/api/carts/", {
            userId: res.data._id,
            products: [],
            totalPrice: 0,
          }),
        ]);
      })
      .then(
        axios.spread((favRes, cartRes) => {
          console.log("fav", favRes);
          console.log("cart", cartRes);
          navigate("/login");
        })
      )
      .catch(() =>
        setErrorOfResponse({ error: true, msg: "try again user may be exist" })
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              name="username"
              {...register("username")}
              label="Username"
              type="username"
              error={errors.username ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
          </div>
          <div>
            <TextField
              label="email"
              type="email"
              {...register("email")}
              error={errors.email ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          <div>
            <TextField
              label="password"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <div>
            <TextField
              label="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword ? true : false}
              sx={{ width: "100%" }}
            />
            <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
          </div>
          <div>
            <FormControlLabel
              control={
                <Controller
                  control={control}
                  name="acceptTerms"
                  defaultValue="false"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <Checkbox
                      sx={{
                        color: "#140005",
                        "&.Mui-checked": {
                          color: "#140005",
                        },
                      }}
                      onChange={(e) => onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label={
                <Typography color={errors.acceptTerms ? "error" : "inherit"}>
                  I have read and agree to the Terms *
                </Typography>
              }
            />
          </div>

          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "#140005", "&:hover": { bgcolor: "#35000d" } }}
          >
            Sign Up
          </Button>
          {postResMsg !== null &&
            (postResMsg.error ? (
              <p style={{ color: "red" }}>{postResMsg.msg}</p>
            ) : (
              <p style={{ color: "green" }}>{postResMsg.msg}</p>
            ))}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
