import { popularProducts } from "../data";
import { useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import axios from "axios";
import { addProduct } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
  background-color: aliceblue;
`;
const Image = styled.img`
  width: 70%;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
  margin-bottom: 15px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;
const Price = styled.div`
  font-size: 40px;
  font-weight: 300;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 15px;
`;
const FiltererColors = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterText = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  margin-right: 5px;
`;
const FilterSize = styled.div`
  display: flex;
`;
const Select = styled.select`
  padding: 5px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
  /* border: 1px red solid; */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AmountTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 10px;
  border: 1px teal solid;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20%;
`;
const AmountText = styled.span``;
const Button = styled.button`
  height: 80%;
  padding: 10px 20px;
  background-color: white;
  border: 1px teal solid;
  transition: all 1s ease;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
const Product = () => {
  //states and variables
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.state;

  //useEffects
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //handlers
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addProduct({ ...product, sizes: size, colors: color, quantity }));
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>{product?.price} $</Price>
          <FilterContainer>
            <FiltererColors>
              <FilterText>Color</FilterText>
              {product.colors?.map((color) => (
                <FilterColor color={color} onClick={() => setColor(color)} />
              ))}
            </FiltererColors>
            <FilterSize>
              <FilterText>Size</FilterText>
              <Select onChange={(e) => setSize(e.target.value)}>
                <Option disabled selected>
                  options
                </Option>
                {product?.sizes.map((size) => (
                  <Option>{size}</Option>
                ))}
              </Select>
            </FilterSize>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Add
                fontSize="medium"
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
              <AmountTextContainer>
                <AmountText>{quantity}</AmountText>
              </AmountTextContainer>
              <Remove
                fontSize="medium"
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
            </AmountContainer>
            <Button onClick={handleClick}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletters />
      <Footer />
    </Container>
  );
};

export default Product;
