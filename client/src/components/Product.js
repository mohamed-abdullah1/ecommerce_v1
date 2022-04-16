import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWashList } from "../redux/userSlice";
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 1s ease;
`;
const Container = styled.div`
  min-height: 250px;
  min-width: 250px;
  flex: 1;
  margin: 10px;
  position: relative;
  background-color: white;
  &:hover ${Info} {
    opacity: 1;
  }
  overflow: hidden;
`;
const Image = styled.img`
  display: block;
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  margin-top: 50px;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 1s ease;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    ${(props) =>
      props.type === "fav" &&
      "background : red;     outline-color: transparent;outline-style: solid; box-shadow: 0 0 0 4px #5a01a7;"}
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const Product = ({ product, page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //handlers
  const handleAddToWashList = () => {
    dispatch(addToWashList(product));
  };
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <Button
            onClick={() =>
              navigate(`/product/${product._id}`, { state: product })
            }
          >
            <SearchIcon />
          </Button>
        </Icon>
        {page !== "washlist" && (
          <Icon onClick={handleAddToWashList} type="fav">
            <FavoriteBorderIcon />
          </Icon>
        )}
      </Info>
    </Container>
  );
};

export default Product;
