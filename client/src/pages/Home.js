import React, { useEffect } from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import useFetch from "../components/customHooks/useFetch";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import { Products } from "../components/Products";
import Slider from "../components/Slider";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ShowMore = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const Home = () => {
  const { data: products } = useFetch("http://localhost:9898/api/products/");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <Slider />
      <Categories />
      <Products
        products={products
          ?.filter((product) => product.countInStock > 1)
          ?.slice(-9, -1)}
      />
      <ShowMore>
        <Button
          sx={{
            bgcolor: "#eaefd9",
            "&:hover": { bgcolor: "#eaeff2" },
            color: "#140005",
            padding: "15px 20px",
            marginLeft: "-15px",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
          onClick={() =>
            navigate("/products/all", {
              state: products.filter((product) => product.countInStock > 0),
            })
          }
        >
          Show All Products
        </Button>
      </ShowMore>
      <Newsletters />
      <Footer />
    </div>
  );
};

export default React.memo(Home);
