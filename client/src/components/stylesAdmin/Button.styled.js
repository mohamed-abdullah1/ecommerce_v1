import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 10px 20px;
  width: 100%;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 18px;
  &:hover {
    transition: 0.2s ease-in;
    background-color: #e5be32;
  }
`;
