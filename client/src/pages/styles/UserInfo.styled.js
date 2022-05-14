import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;
export const TopCom = styled.div`
  display: flex;
  justify-content: space-between;
  & > h1 {
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Form = styled.form``;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BasicInfo = styled.div`
  flex: 5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  max-height: 570px;
  & > h4 {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;
export const Options = styled.div`
  flex: 2;
  margin-left: 20px;

  & > div > h1 {
    font-weight: 200;
    margin-bottom: 20px;
  }
  & > div {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 20px;
    padding: 20px;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;
