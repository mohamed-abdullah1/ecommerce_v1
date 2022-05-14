import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWashList, removeFromWashList } from "../redux/userSlice";
import { Container, Image, Icon, ImgContainer } from "./styles/Product.styled";
import { Card, CardContent, Rating, Typography } from "@mui/material";

const Product = ({ product, page }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { washList } = useSelector((state) => state.user);
  const [fav, setFav] = useState(
    washList.map((item) => item._id).includes(product._id) ? true : false
  );
  //handlers
  const handleAddToWashList = () => {
    if (page === "washlist") {
      dispatch(removeFromWashList(product));
    } else if (!washList.map((item) => item._id).includes(product._id)) {
      dispatch(addToWashList(product));
    } else {
      dispatch(removeFromWashList(product));
    }
  };

  useEffect(() => {
    if (washList.map((item) => item._id).includes(product._id)) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, [washList]);

  return (
    <Container>
      <Card
        sx={{
          maxWidth: 500,
          bgcolor: "#EAEFF2",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        <ImgContainer>
          <Image
            onClick={() => {
              navigate(`/product/${product._id}`, { state: product._id });
            }}
            src={product.img}
          />
          <Icon type="favIcon" isInFav={fav} onClick={handleAddToWashList}>
            <FavoriteBorderIcon />
          </Icon>
        </ImgContainer>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.desc.slice(0, 100)}
          </Typography>
          <Rating
            name="simple-controlled"
            value={product.rating}
            size="large"
            readOnly
            precision={0.5}
          />
          <Typography gutterBottom variant="h5" component="div">
            {product.price}$
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Product;
