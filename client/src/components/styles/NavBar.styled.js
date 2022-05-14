import styled from "styled-components";

//styled Components
export const Container = styled.div`
  height: 80px;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 99;
  background-color: #eaeff2;
  position: fixed;
  top: 0;
  left: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: flex-start;
`;
//Left components
export const Center = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
  margin-left: 300px;
`;
export const Language = styled.span`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  padding: 5px;
  margin-left: 15px;
`;
export const Input = styled.input`
  border: none;
  width: 15rem;
`;
//Center components
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 7px;
`;
export const Logo = styled.h1`
  font-weight: 300;
  font-size: 60px;
`;
//Center components
export const Right = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 13px;
`;
export const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 5px;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
`;
