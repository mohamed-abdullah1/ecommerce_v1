import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { incQuantity, decQuantity, logoutCart } from "../redux/cartSlice";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Container,
  Wrapper,
  Title,
  InfoSection,
  Left,
  Center,
  CenterInfo,
  CartProductDetails,
  Products,
  ProductDetails,
  Right,
  ImageContainer,
  ProductAmount,
  ProductInfo,
  ProductColor,
  Price,
  ProductId,
  ProductName,
  Amount,
  AmountValue,
  Size,
  SubTotal,
  Summary,
  SummaryTitle,
  Text,
  Value,
  EstimateShipping,
  Discount,
  CheckOutButton,
  Total,
} from "./styles/Cart.styled";
import { removeProduct } from "../redux/cartSlice";
const Cart = () => {
  //states and variables
  const { products, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser, washList } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("products in the cart", products);
  }, []);
  //handlers

  const makePayment = (token) => {
    console.log("token", token);
    const asyncReq = async (token) => {
      try {
        const res = await axios.post(
          "http://localhost:9898/api/checkout/payment/",
          {
            amount: total,
            token,
          }
        );
        console.log("response", res);
        if (res.status === 200) {
          //post an order to db
          const editedProducts = products.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
          }));
          const { address_city, address_country, address_line1 } =
            res.data.address;
          axios
            .post("http://localhost:9898/api/orders/", {
              userId: currentUser._id,
              products: editedProducts,
              amount: total,
              address: `${address_city} - ${address_country} - ${address_line1}`,
            })
            .then((orderRes) => {
              console.log("orderRes", orderRes);
              dispatch(logoutCart());
            })
            .catch((err) => console.log(err));
        }
      } catch (err) {
        console.log("error", err);
      }
    };
    asyncReq(token);
  };
  const handleRemove = (product) => {
    axios
      .put(
        `http://localhost:9898/api/products/${product._id}`,
        { ...product, countInStock: product.countInStock + product.quantity },
        { headers: { token: `Bearer ${currentUser.accessToken}` } }
      )
      .then((res) => {
        console.log(res);
        dispatch(removeProduct(product));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <InfoSection>
          <Left>
            <Button
              sx={{
                bgcolor: "#140005",
                "&:hover": { bgcolor: "#35000d" },
                color: "white",
                padding: "15px 20px",
                marginLeft: "-15px",
                fontSize: "1.1rem",
                fontWeight: "500",
              }}
              onClick={() => navigate("/")}
            >
              CONTINUE SHOPPING
            </Button>
          </Left>
          <Center>
            <CenterInfo>Shopping Bag({products.length})</CenterInfo>
          </Center>
          <Right>
            <CenterInfo onClick={() => navigate("/washlist")}>
              Your WishList ({washList.length})
            </CenterInfo>
          </Right>
        </InfoSection>
        <CartProductDetails>
          <Products>
            {products.length === 0 ? (
              <p>NoThing To show</p>
            ) : (
              products.map((product) => (
                <Card
                  sx={{
                    maxWidth: 500,
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                    margin: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    width="150"
                    image={product.img}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      {product.title.slice(0, 20)}
                    </Typography>
                    <Typography variant="h6" style={{}}>
                      <strong>Total Price : </strong>
                      {product.price * product.quantity} $
                    </Typography>
                    <Typography variant="h6" style={{}}>
                      <strong>Quantity : </strong>
                      {product.quantity}
                    </Typography>
                    <Typography variant="h6" style={{}}>
                      <strong>Size : </strong>
                      {product.sizes}
                    </Typography>
                    <Typography variant="h6" style={{}}>
                      <strong>Color : </strong>
                      {product.colors}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="medium"
                      sx={{
                        bgcolor: "red",
                        color: "white",
                        "&:hover": {
                          bgcolor: "#f95252",
                          color: "white",
                        },
                      }}
                      onClick={() => handleRemove(product)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))
            )}
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
              token={makePayment}
              stripeKey="pk_test_51KoVCxCaA7JCkhT1R2jPrPgrf5QVa9pHfdTZkE55MsALFaEWtoUgMpDH6gKzSLCgxzAE0cHEZORZJh2KHZyI2X7O005gL0g4Js"
              name="Amazooo checkout"
              amount={total * 100}
              billingAddress
              shippingAddress
            />
          </Summary>
        </CartProductDetails>
      </Wrapper>
      <Footer style={{ position: "absolute", width: "100%", bottom: 0 }} />
    </Container>
  );
};

export default Cart;
