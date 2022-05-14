import { Container, Wrapper } from "./stylesAdmin/Products.styled";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import NavMenu from "./NavMenu";
const columns = [
  { field: "title", headerName: "Title", width: 200 },
  { field: "_id", headerName: "ID", width: 300 },
  { field: "sizes", headerName: "Sizes", width: 200 },
  { field: "colors", headerName: "Colors", width: 200 },
  { field: "price", headerName: "Price", width: 100 },
];

const Products = () => {
  //states and variables
  const [rows, setRows] = useState();
  const [deletedRowsIds, setDeletedRowsIds] = useState([]);
  const { accessToken } = useSelector((state) => state.user.currentUser);
  //######################################

  //handlers
  const handleSelection = (rowsSelected) => {
    setDeletedRowsIds(rowsSelected);
    console.log(rowsSelected);
  };
  const handleDelete = () => {
    deletedRowsIds.forEach((rowId) => {
      deleteProduct(rowId);
    });
  };
  //######################################

  //useEffects
  useEffect(() => {
    getProducts();
  }, [rows]);
  //######################################

  //async functions
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:9898/api/products/");
      console.log("fetched Data", res.data);
      console.log("example for a product", res.data[0]);
      setRows(res.data.reverse());
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProduct = async (productId) => {
    try {
      const res = await axios.delete(
        `http://localhost:9898/api/products/${productId}`,
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  //######################################

  return (
    <>
      <NavMenu />
      <Container>
        <Wrapper>
          <h1>Products</h1>
          <div
            style={{
              height: 700,
              width: "100%",
              fontSize: "200px",
              fontSize: "50px",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={11}
              rowsPerPageOptions={[10]}
              checkboxSelection
              onSelectionModelChange={handleSelection}
              getRowId={(row) => row._id}
              sx={{ fontSize: "15px", fontWeight: "700" }}
            />
          </div>
          <div>
            <Button
              sx={{
                bgcolor: "#060b26",
                "&:hover": {
                  bgcolor: "#1a83ff",
                },
              }}
              variant="contained"
              onClick={handleDelete}
            >
              Delete Selected Rows
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Products;
