import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { incQuantity, decQuantity } from "../redux/cartSlice";

const Container = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 200;
  text-align: center;
  width: 100%;
  margin: 10px 0;
`;
const InfoSection = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const CenterInfo = styled.div`
  margin-right: 15px;
  font-size: 22px;
  text-decoration: underline;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  background-color: ${({ type }) =>
    type === "bg-none" ? "black" : "transparent"};
  color: ${({ type }) => (type === "bg-none" ? "white" : "black")};
  padding: 10px 15px;
  font-size: 20px;
  border: 1px solid black;
  width: ${({ width }) => width && width};
`;
const CartProductDetails = styled.div`
  display: flex;
`;
const ProductDetails = styled.div`
  display: flex;

  padding: 30px;
`;
const ProductName = styled.div`
  margin-bottom: 20px;
`;
const ProductId = styled.div`
  margin-bottom: 20px;
`;
const ProductColor = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 20px;
`;
const Size = styled.div`
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  font-size: 40px;
  font-weight: 200;
`;
const Products = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
`;
const ImageContainer = styled.img`
  flex: 1;
  max-width: 250px;
  height: 250px;
  object-fit: cover;
  margin-right: 20px;
`;
const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Summary = styled.div`
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
const AmountValue = styled.div`
  font-size: 30px;
  margin: 0 10px;
`;
const Line = styled.hr`
  border: none;
  height: 1px;
  color: gray;
  width: 70%;
`;
const SummaryTitle = styled.div`
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  margin: 5px 10px;
`;

const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

const EstimateShipping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Discount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

const CheckOutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
`;

const Value = styled.div`
  display: flex;
`;

const Cart = () => {
  //states and variables
  const { products, total } = useSelector((state) => state.cart);
  const cart = { products, total };
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();

  //useEffects
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:9898/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: total * 100,
          }
        );
        navigate("/success", {
          state: { stripeData: res.data, products: cart },
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //handlers

  const onToken = (token) => {
    setStripeToken(token);
  };

  const handleQuantity = (type, quantity) => {
    if (type === "dec") {
      quantity > 1 && dispatch(decQuantity());
    } else {
      dispatch(incQuantity());
    }
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <InfoSection>
          <Left>
            <Button type="bg-black" onClick={() => navigate("/")}>
              CONTINUE SHOPPING
            </Button>
          </Left>
          <Center>
            <CenterInfo>Shopping Bag(2)</CenterInfo>
            <CenterInfo>Your WishList(0)</CenterInfo>
          </Center>
          <Right>
            <Button type="bg-none">CHECKOUT NOW</Button>
          </Right>
        </InfoSection>
        <CartProductDetails>
          <Products>
            {products.map((product) => (
              <ProductDetails>
                <ImageContainer src={product.img} />
                <ProductInfo>
                  <ProductName>
                    <b>Product : </b>
                    {product.desc}
                  </ProductName>
                  <ProductId>
                    <b>Id : </b>
                    {product._id}
                  </ProductId>
                  <ProductColor color={product?.color} />
                  <Size>
                    <b>Size:</b> {product.size}
                  </Size>
                </ProductInfo>
                <ProductAmount>
                  <Amount>
                    <Add
                      fontSize="large"
                      onClick={() => handleQuantity("inc", product._id)}
                    />
                    <AmountValue>{product.quantity}</AmountValue>
                    <Remove
                      fontSize="large"
                      onClick={() => handleQuantity("dec", product._id)}
                    />
                  </Amount>
                  <Price>$ {product.price * product.quantity}</Price>
                </ProductAmount>
              </ProductDetails>
            ))}
          </Products>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SubTotal>
              <Text>SubTotal</Text>
              <Value>$ {total}</Value>
            </SubTotal>
            <EstimateShipping>
              <Text>Estimate Shipping</Text>
              <Value>$ 5.90</Value>
            </EstimateShipping>
            <Discount>
              <Text>Shipping Discount</Text>
              <Value>$ -5.90</Value>
            </Discount>
            <Total>
              <Text>Total</Text>
              <Value>$ {total}</Value>
            </Total>
            <StripeCheckout
              name="Amazoo Shop"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.KEY}
            >
              <CheckOutButton>
                <Button type="bg-none" width="80%">
                  CHECKOUT NOW{" "}
                </Button>
              </CheckOutButton>
            </StripeCheckout>
          </Summary>
        </CartProductDetails>
      </Wrapper>
      <Footer style={{ position: "absolute", width: "100%", bottom: 0 }} />
    </Container>
  );
};

export default Cart;
