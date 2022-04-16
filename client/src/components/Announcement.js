import React from "react";
import styled from "styled-components";
//styled components
const Container = styled.div`
  height: 20px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  z-index: 100;
`;
const Wrapper = styled.div`
  font-size: 16px;
`;

const Announcement = () => {
  return (
    <Container>
      <Wrapper>There is a great offers today, Don't waste it!</Wrapper>
    </Container>
  );
};

export default Announcement;
