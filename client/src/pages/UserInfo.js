import TextField from "@mui/material/TextField";
import {
  BasicInfo,
  Container,
  Info,
  TopCom,
  Wrapper,
  Form,
  BtnContainer,
} from "./styles/UserInfo.styled";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../redux/apiCall";
const UserInfo = () => {
  //variables
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
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { accessToken, _id } = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [response, setResponse] = useState({ error: false, msg: "" });
  const navigate = useNavigate();
  //handlers
  const onSubmit = (formData) => {
    console.log(formData);
    const { confirmPassword, ...newUserData } = formData;

    axios
      .put(`http://localhost:9898/api/users/${_id}`, newUserData, {
        headers: { token: `Bearer ${accessToken}` },
      })
      .then((res) => {
        login(dispatch, newUserData);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setResponse({
          error: true,
          msg: "please choose unique username and unique email",
        });
      });
  };

  //return function
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <TopCom>
          <h1>Update Your Info</h1>
        </TopCom>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Info>
            <BasicInfo>
              <div>
                <TextField
                  helperText=" "
                  {...register("username")}
                  error={errors.username ? true : false}
                  id="demo-helper-text-aligned-no-helper"
                  label="@username"
                  sx={{ width: "100%" }}
                />
                <p style={{ color: "red" }}>{errors.username?.message}</p>
              </div>

              <div>
                <TextField
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
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
                  name="confirmPassword"
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label="new password"
                  type="password"
                  {...register("password")}
                  error={errors.password ? true : false}
                  sx={{ width: "100%" }}
                />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
              </div>
              <div>
                <TextField
                  name="password"
                  helperText=" "
                  id="demo-helper-text-aligned-no-helper"
                  label="confirm password"
                  sx={{ width: "100%" }}
                  type="password"
                  {...register("confirmPassword")}
                  error={errors.confirmPassword ? true : false}
                />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
              </div>
              <div>
                {response.error && (
                  <p style={{ color: "red" }}>{response.msg}</p>
                )}
              </div>
            </BasicInfo>
          </Info>
          <BtnContainer>
            <Button
              variant="contained"
              sx={{
                marginTop: 3,
                height: "50%",
                width: "100px",
                bgcolor: "#140005",
                fontWeight: "400",
                fontSize: "16px",
                padding: "20px 80px",
                "&:hover": {
                  bgcolor: "#35000d",
                },
              }}
              type="submit"
            >
              Update
            </Button>
          </BtnContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default UserInfo;
