import Product from "./Product";
import useFetch from "./customHooks/useFetch";
import { Container, NoThing } from "./styles/Products.styled";
import MoonLoader from "react-spinners/MoonLoader";
import React from "react";
export const Products = ({ products, page }) => {
  const { data: localProducts } = useFetch(
    "http://localhost:9898/api/products/"
  );
  console.log("products from products component", products);
  return (
    <Container key={products.length}>
      {products && localProducts ? (
        products.length !== 0 ? (
          products.map((product) => (
            <Product key={product._id} product={product} page={page} />
          ))
        ) : (
          <NoThing>
            <MoonLoader size={40} color="black" />
          </NoThing>
        )
      ) : (
        localProducts.map((product) => (
          <Product key={product._id} product={product} page={page} />
        ))
      )}
    </Container>
  );
};
