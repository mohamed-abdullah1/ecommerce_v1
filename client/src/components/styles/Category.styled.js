import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 20px;
  position: relative;
`;
export const ImgContainer = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 10px;
`;
export const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const InfoTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
