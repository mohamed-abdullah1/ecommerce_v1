import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  padding: 100px 300px;
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: -20px 0 50px 0;
`;
export const Comments = styled.div`
  /* border: solid blue 1px; */
  flex: 2;
  min-height: 100vh;

  & > h2 {
    font-size: 2.5rem;
    margin: 10px;
  }
`;
export const CommentForm = styled.form`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  flex: 1;
  margin: 80px 0 0 30px;
  padding: 20px;
  background-color: #dadfe8;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  transition: all ease-in-out 1s;
  & > h3 {
    font-size: 2rem;
    font-weight: 500;
  }
  & > p {
    text-align: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 800;
  }
`;
export const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
`;
export const UserInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
`;
export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const RatingContainerInForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20vh;
  margin-top: 10px;
`;
