import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 100px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;
export const InfoSection = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const CenterInfo = styled.div`
  margin-right: 15px;
  font-size: 22px;
  text-decoration: underline;
  cursor: pointer;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: ${({ type }) =>
    type === "bg-none" ? "black" : "transparent"};
  color: ${({ type }) => (type === "bg-none" ? "white" : "black")};
  padding: 10px 15px;
  font-size: 20px;
  border: 1px solid black;
  width: ${({ width }) => width && width};
`;
export const CartProductDetails = styled.div`
  display: flex;
`;
export const ProductDetails = styled.div`
  display: flex;

  padding: 30px;
`;
export const ProductName = styled.div`
  margin-bottom: 20px;
`;
export const ProductId = styled.div`
  margin-bottom: 20px;
`;
export const ProductColor = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 20px;
`;
export const Size = styled.div`
  margin-bottom: 20px;
`;
export const ProductAmount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Amount = styled.div`
  display: flex;
  align-items: center;
`;
export const Price = styled.div`
  font-size: 40px;
  font-weight: 200;
`;
export const Products = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 40px;
  & > p {
    font-size: 2rem;
  }
`;
export const ImageContainer = styled.img`
  flex: 1;
  max-width: 250px;
  height: 250px;
  object-fit: cover;
  margin-right: 20px;
`;
export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const Summary = styled.div`
  border: #bdbdbd 1px solid;
  border-radius: 10px;
  flex: 2;
  max-height: 500px;
  padding: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const AmountValue = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
export const Line = styled.hr`
  border: none;
  height: 1px;
  color: gray;
  width: 70%;
`;
export const SummaryTitle = styled.div`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin: 5px 10px;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const EstimateShipping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

export const CheckOutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
`;

export const Value = styled.div`
  display: flex;
`;
