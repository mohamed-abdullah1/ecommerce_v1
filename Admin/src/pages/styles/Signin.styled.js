import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border: black 1px solid; */
  height: ${(props) => (props.name === "forgetPassCom" ? "400" : "500")}px;
  width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const TitleContainer = styled.div``;
export const Title = styled.h1`
  font-weight: 600;
`;
export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: ${(props) => (props.name === "forgetPassCom" ? "20px" : "-20px")};
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ name }) => (name === "email" ? "50px" : "30px")};
`;
export const InputName = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
  font-weight: 700;
`;
export const InputField = styled.input`
  padding: 15px 30px;
  outline-width: 1;
  border: #ced4da 1px solid;
  font-size: 20px;
`;
export const RememberAndForgetPass = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;

  & > p {
    color: #005dff;
    text-decoration: underline;
    cursor: pointer;
  }
  & > div {
    margin-top: 15px;
    font-size: 17px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
