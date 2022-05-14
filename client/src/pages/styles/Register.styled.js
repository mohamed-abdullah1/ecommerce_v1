import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 200;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
  & > div > input {
    width: 100%;
  }
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px;
  padding: 10px;
  font-size: 20px;
`;
export const Agreement = styled.div`
  margin-left: 5px;
  font-style: 14px;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;
export const Button = styled.button`
  width: 20%;
  text-align: center;
  border: 1px solid teal;
  background-color: teal;
  color: white;
  padding: 10px 15px;
`;
