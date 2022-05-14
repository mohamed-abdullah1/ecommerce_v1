import { useEffect } from "react";
import axios from "axios";
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container, Wrapper } from "./styles/OrdersHistory.styled";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import MoonLoader from "react-spinners/MoonLoader";
import { useNavigate } from "react-router-dom";
import useFetch from "../components/customHooks/useFetch";
import { Button } from "@mui/material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { data: fetchedProducts } = useFetch(
    "http://localhost:9898/api/products"
  );
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.noOfProducts}</TableCell>
        <TableCell align="center">{row.totalAmount}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
        <TableCell align="center" style={{ color: "#e8cc00" }}>
          {row.status}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Products Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.productDetails.map((productRow) => (
                    <TableRow key={productRow.productId}>
                      <TableCell component="th" scope="row">
                        <button
                          onClick={async () => {
                            const product = await fetchedProducts.find(
                              (item) => item._id === productRow.productId
                            );
                            navigate(`/product/${productRow.productId}`, {
                              state: product._id,
                            });
                          }}
                          style={{ color: "blue" }}
                        >
                          {productRow.productName}
                        </button>
                      </TableCell>
                      {/* <TableCell>{productRow.productId}</TableCell> */}
                      <TableCell align="center">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell align="center">
                        {/* {Math.round(productRow.amount * row.price * 100) / 100} */}
                        {productRow.totalPrice}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    noOfProducts: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    productDetails: PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string.isRequired,
        productId: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
      })
    ).isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
  }).isRequired,
};

export default function OrdersHistory() {
  //variables , states
  const [rows, setRows] = React.useState([]);
  const { _id, accessToken } = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const { data: products } = useFetch(`http://localhost:9898/api/products`);
  //useEffects
  useEffect(() => {
    axios
      .all([
        axios.get(`http://localhost:9898/api/orders/find/${_id}`, {
          headers: { token: `Bearer ${accessToken}` },
        }),
        axios.get("http://localhost:9898/api/products/"),
      ])
      .then(
        axios.spread((ordersRes, productsRes) => {
          console.log(ordersRes);
          const createRow = (orderObj) => {
            const {
              _id,
              userId,
              products: productsInOrder,
              amount,
              address,
              status,
            } = orderObj;
            let totalNumberOfProducts = 0;
            productsInOrder.map(
              (product) => (totalNumberOfProducts += product.quantity)
            );
            return {
              orderId: _id,
              userId,
              noOfProducts: totalNumberOfProducts,
              totalAmount: amount,
              address,
              status,
              productDetails: productsInOrder.map(
                ({ productId, quantity }) => ({
                  productName:
                    productsRes.data?.find(
                      (product) => productId === product._id
                    )?.title || "can't be fetched",
                  productId,
                  quantity,
                  totalPrice:
                    productsRes.data?.find(
                      (product) => productId === product._id
                    )?.price * quantity || 0,
                })
              ),
            };
          };
          ordersRes.data.map((order, index) => {
            console.log(
              `order no(${index + 1}) :- ${order.createdAt.slice(5, 7)} `
            );
            const newRow = createRow(order);
            setRows((oldRows) => [
              ...oldRows.filter((row, index) => oldRows.indexOf(row) === index),
              newRow,
            ]);
            console.log(index, rows);
          });
        })
      )
      .catch((err) => console.log(err));
  }, []);

  //render
  return (
    <Container>
      <NavBar />

      {rows.length !== 0 ? (
        <Wrapper>
          <h1>Orders000</h1>

          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="center">no Of Products</TableCell>
                  <TableCell align="center">total Price</TableCell>
                  <TableCell align="center">address</TableCell>
                  <TableCell align="center">status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.orderId} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      ) : (
        <>
          <div
            style={{
              height: "90vh",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MoonLoader size={40} />
            </div>
            <p
              style={{
                fontSize: "30px",
              }}
            >
              No Orders made{" "}
              <span
                style={{
                  fontSize: "30px",
                }}
              >
                &#128548;
              </span>
            </p>
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
              onClick={() => navigate("/products/all", { state: products })}
            >
              Go To Products List
            </Button>{" "}
          </div>
        </>
      )}
    </Container>
  );
}
