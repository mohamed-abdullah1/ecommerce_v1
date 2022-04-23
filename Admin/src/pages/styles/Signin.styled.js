import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1000px;
`;

export const TitleContainer = styled.div`
  & > p {
    font-size: 17px;
    margin: 10px 0;
  }
`;
export const Title = styled.h1`
  font-weight: 600;
`;

export const Form = styled.form`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const SignContent = styled.div`
  margin-top: 40px;

  & > input {
    margin-top: 10px;
  }
`;
