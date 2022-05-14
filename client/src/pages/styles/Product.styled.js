import styled from "styled-components";

export const Container = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-top: 50px;
`;
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-top: 50px;
  padding: 100px 300px;
`;
export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
  height: 800px;
  width: 100%;
  /* border: 1px red solid; */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;
export const Image = styled.img`
  /* min-width: 100%;
  min-height: 100%; */
  object-fit: cover;
  height: 800px;
  width: 100%;
  /* flex-shrink: 0; */
`;
export const InfoContainer = styled.form`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

export const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
  margin-bottom: 15px;
`;
export const Desc = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
`;
export const Price = styled.div`
  font-size: 40px;
  font-weight: 300;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 15px;
`;
export const FiltererColors = styled.div`
  display: flex;
  justify-content: center;
`;
export const FilterText = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
export const FilterColor = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  /* border: ${(props) =>
    props.color === props.selectedColor && "3px solid #28a745"}; */
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  transform: ${(props) => props.color === props.selectedColor && "scale(0.8)"};
`;
export const FilterSize = styled.div`
  display: flex;
`;
export const Select = styled.select`
  padding: 5px;
`;
export const Option = styled.option``;
export const AddContainer = styled.div`
  /* border: 1px red solid; */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  & > div > p {
    margin-top: 10px;
    font-size: 1.3rem;
    margin: 0px 0 0 60px;
  }
`;
export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AmountTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  border: 1px #140005 solid;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20%;
`;
export const AmountText = styled.span``;

export const SpinnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RatingContainer = styled.div`
  margin: 40px 0 0 0;
`;
