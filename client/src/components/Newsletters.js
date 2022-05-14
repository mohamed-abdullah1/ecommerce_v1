import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  Container,
  Title,
  Description,
  InputContainer,
} from "./styles/Newsletters.styled";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Newsletters = () => {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState({
    thereIsRes: false,
    error: false,
    msg: "",
  });
  const subscribe = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9898/api/news/subscribe", {
        email,
      })
      .then((res) => {
        setResponse({
          thereIsRes: true,
          error: false,
          msg: "to confirm your subscription check your inbox ",
        });
      })
      .catch((err) => {
        setResponse({
          thereIsRes: true,
          error: true,
          msg: "Please Enter your email Again , Correctly",
        });
      })
      .finally(() => alert(response.msg));
  };
  return (
    <Container>
      <Title>Newsletters</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <input
          style={{
            flex: "9",
            padding: "15px 20px",
            outline: "none",
            borderRadius: "13px",
          }}
          id="outlined-basic"
          placeholder="Enter your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          sx={{
            bgcolor: "#140005",
            "&:hover": { bgcolor: "#35000d" },
          }}
          variant="contained"
          endIcon={<SendIcon sx={{ marginRight: 1 }} />}
          onClick={subscribe}
        ></Button>
      </InputContainer>
      {/* {response.thereIsRes && response.error && (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            marginTop: 10,
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          {response.msg}
        </div>
      )} */}
      {/* {response.thereIsRes && !response.error && (
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            marginTop: 10,
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          {response.msg}
        </div>
      )} */}
    </Container>
  );
};

export default Newsletters;
