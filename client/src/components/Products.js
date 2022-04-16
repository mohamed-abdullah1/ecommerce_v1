import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Products = ({ products, page }) => {
  const [localProducts, setLocalProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9898/api/products/");
        setLocalProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <Container>
      {products && localProducts
        ? products.map((product) => (
            <Product key={product.id} product={product} page={page} />
          ))
        : localProducts.map((product) => (
            <Product key={product.id} product={product} page={page} />
          ))}
    </Container>
  );
};
