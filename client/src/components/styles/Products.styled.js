import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
export const NoThing = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 20px;
  & > p {
    font-size: 4rem;
  }
`;
