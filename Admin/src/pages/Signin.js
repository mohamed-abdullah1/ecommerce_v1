// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Box,
//   Title,
//   SubTitle,
//   TitleContainer,
//   InputContainer,
//   InputName,
//   InputField,
//   RememberAndForgetPass,
//   BtnContainer,
// } from "./styles/Signin.styled";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import { Button } from "../components/styles/Button.styled";
// import { ForgitPassword } from "../components/ForgitPassword";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../redux/apiCall";
// import { useNavigate } from "react-router-dom";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export default function Signin() {
//   //variables
//   const [forgetPass, setForgetPass] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.user.error);
//   const navigate = useNavigate();
//   const [signinClicked, setSigninClicked] = useState(false);
//   //function passed to the child component to be able to change the state of the parent state
//   const changeForgetPass = (param) => {
//     setForgetPass(param);
//   };
//   //useEffects
//   // useEffect(() => {
//   //   login(dispatch, { username, password });
//   //   if (!error) {
//   //     navigate("/");
//   //   }
//   // }, [signinClicked, error]);
//   //handlers
//   const handleClick = () => {
//     // setSigninClicked(true);
//     login(dispatch, { username, password });
//     if (!error) {
//       navigate("/");
//     }
//   };
//   const handleForget = () => {
//     setForgetPass(true);
//   };
//   return (
//     <>
//       {!forgetPass ? (
//         <Container>
//           <Box>
//             <TitleContainer>
//               <Title>Sign In</Title>
//               <SubTitle>Log in to your account to continue.</SubTitle>
//             </TitleContainer>
//             <InputContainer
//               name="username"
//               onChange={(e) => setUsername(e.target.value)}
//             >
//               <InputName>Username</InputName>
//               <InputField />
//             </InputContainer>
//             <InputContainer
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//             >
//               <InputName>Password</InputName>
//               <InputField />
//             </InputContainer>
//             <RememberAndForgetPass>
//               <p onClick={handleForget}>Forget Password?</p>
//             </RememberAndForgetPass>
//             <BtnContainer>
//               <Button bgColor="#FFD333" onClick={handleClick}>
//                 Sign in
//               </Button>
//             </BtnContainer>
//           </Box>
//         </Container>
//       ) : (
//         <ForgitPassword changeForgetPass={changeForgetPass} />
//       )}
//     </>
//   );
// }
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
              bgcolor: "#B352A0",
              "&:hover": {
                bgcolor: "#B352B0",
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
