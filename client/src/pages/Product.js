import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import { addProduct } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterText,
  FiltererColors,
  Select,
  AmountContainer,
  Option,
  AddContainer,
  AmountTextContainer,
  AmountText,
  ProductWrapper,
  SpinnerContainer,
  RatingContainer,
} from "./styles/Product.styled";
import Button from "@mui/material/Button";
import CommentSection from "../components/CommentSection";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import { Rating } from "@mui/material";
const Product = () => {
  //states and variables
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.state;
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.user.currentUser);
  //useEffects
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`http://localhost:9898/api/products/find/${productId}`)
      .then((response) => {
        console.log("response", response);
        setProduct(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
        console.log("finally", product);
      });
  }, []);
  //handlers
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity((quantity) => quantity - 1);
    } else {
      product?.countInStock > quantity &&
        setQuantity((quantity) => quantity + 1);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:9898/api/products/find/${productId}`)
      .then((response) => {
        console.log("get product again ", response.data);
        return response;
      })
      .then((response) => {
        console.log("response", response);
        if (quantity && size && color && size) {
          if (response.data.countInStock >= quantity) {
            axios
              .put(
                `http://localhost:9898/api/products/${productId}`,
                {
                  ...response.data,
                  countInStock: response.data.countInStock - quantity,
                },
                { headers: { token: `Bearer ${accessToken}` } }
              )
              .then((res) => {
                dispatch(
                  addProduct({
                    ...res.data,
                    sizes: size,
                    colors: color,
                    quantity,
                  })
                );
              })
              .catch((err) => console.log(err));

            navigate("/cart", { replace: true });
          } else {
            alert(`sorry there is only ${response.data.countInStock} pieces`);
          }
        } else {
          alert("please select color and  size ");
        }
      })
      .catch((err) => console.log(err));
  };
  const getFullRating = (rating) => setProduct({ ...product, rating });
  return (
    <Container>
      <NavBar />
      {loading ? (
        <SpinnerContainer>
          <MoonLoader loading size={30} color="black" />
        </SpinnerContainer>
      ) : (
        <Wrapper>
          <ProductWrapper>
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
                  {product?.colors?.map((colorItem, index) => (
                    <FilterColor
                      key={index}
                      selectedColor={color}
                      color={colorItem}
                      onClick={() =>
                        setColor((prevColor) =>
                          prevColor === colorItem ? null : colorItem
                        )
                      }
                    />
                  ))}
                </FiltererColors>
                <FilterSize>
                  <FilterText>Size</FilterText>
                  <Select onChange={(e) => setSize(e.target.value)}>
                    <Option disabled selected>
                      options
                    </Option>
                    {product?.sizes.map((size, index) => (
                      <Option key={index}>{size}</Option>
                    ))}
                  </Select>
                </FilterSize>
              </FilterContainer>
              <RatingContainer>
                <Rating
                  name="simple-controlled"
                  value={product.rating}
                  size="large"
                  readOnly
                  precision={0.5}
                />
              </RatingContainer>
              <AddContainer>
                <AmountContainer>
                  <Add
                    fontSize="medium"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleQuantity("inc")}
                  />
                  <AmountTextContainer>
                    <AmountText>{quantity ? quantity : "0"}</AmountText>
                  </AmountTextContainer>
                  <Remove
                    fontSize="medium"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleQuantity("dec")}
                  />
                </AmountContainer>
                <div>
                  <p>
                    <strong>Total</strong> = {product?.price * quantity} $
                  </p>
                </div>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  sx={{
                    bgcolor: "#140005",
                    fontSize: 17,
                    marginLeft: 10,
                    "&:hover": { bgcolor: "#35000d" },
                  }}
                  type="submit"
                >
                  Add to Cart
                </Button>
              </AddContainer>
            </InfoContainer>
          </ProductWrapper>
          <CommentSection
            productId={product._id}
            getFullRating={getFullRating}
          />
        </Wrapper>
      )}
      <Newsletters />
      <Footer />
    </Container>
  );
};

export default Product;
