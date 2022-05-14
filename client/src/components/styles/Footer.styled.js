import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #eaeff2;
  postion: ${({ page }) => page === "/washlist" && "fixed"};
  bottom: 0;
  left: 0;
  width: 100%;
`;
//Left
export const Left = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
`;
export const Logo = styled.h1`
  font-weight: 300;
`;
export const Description = styled.div``;
export const SocialItems = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const SocialItem = styled.div`
  margin: 5px;
  font-size: 30px;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    color: teal;
  }
`;
//Center
export const Center = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
`;
export const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 20px;
  color: black;
`;
export const ListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60%;
`;
export const ListItem = styled.li`
  margin-bottom: 5px;
  width: 50%;
  font-size: 20px;
  color: black;
`;
//right
export const Right = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`;
export const ContactItem = styled.div`
  margin-bottom: 10px;
  color: black;
`;
