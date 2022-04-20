import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #3d464d;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  max-height: 70px;
  & > h1 {
    flex: 1;
    font-size: 30px;
  }
  & > div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  & > div > p {
    margin-right: 40px;
  }
`;
export const Button = styled.button`
  background-color: #7b1fa2;
  border: 1px solid white;
  height: 40px;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 8px;
  cursor: pointer;
  font-weight: 100;
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: #721899;
  }
`;
