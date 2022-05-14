import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: #b6c0d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 100px;
  font-weight: 900;
`;
export const Description = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
  text-align: center;
`;
export const InputContainer = styled.form`
  width: 30%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
`;
export const Input = styled.input`
  flex: 9;
  padding: 10px 20px;
`;
export const Button = styled.button`
  flex: 1;
  background-color: #140005;
  color: white;
  border: none;
`;
