import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  & > h1 {
    font-weight: 400;
    cursor: pointer;
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;
