import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Navbar from "../components/Navbar";
import { Container, Wrapper } from "./styles/Orders.styled";
import Button from "@mui/material/Button";

const data = [
  {
    id: 1,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 2,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 3,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 4,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 5,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 6,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 7,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 8,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 9,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 10,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 11,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 12,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
  {
    id: 13,
    title: "T-shirt",
    categories: "men-women-summer",
    sizes: "sm-lg-xl",
    colors: "red-yellow-blue",
    price: "25$",
    inStock: 5,
  },
];
const columns = [
  { field: "user_id", headerName: "Uer_ID", width: 100 },
  { field: "productId", headerName: "ProductId", width: 100 },
  { field: "quantity", headerName: "Categories", width: 200 },
  { field: "size", headerName: "Size", width: 200 },
  { field: "price", headerName: "TotalPrice", width: 100 },
  { field: "quantity", headerName: "quantity", width: 100 },
];
const Orders = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Orders</h1>
        <div style={{ height: 650, width: "100%", fontSize: "200px" }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            // onSelectionModelChange={handleSelection}
          />
        </div>
        <div>
          <Button variant="contained" color="error">
            Delete Selected Rows
          </Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Orders;
