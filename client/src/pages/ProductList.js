import React, { useState, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import { Products } from "../components/Products";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, FilterContainer } from "./styles/ProductList.styled";

const ProductList = () => {
  const { category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState(location.state);
  const [filteredProducts, setFilteredProducts] = useState(location.state);
  const [size, setSize] = useState("none");
  const [color, setColor] = useState("none");
  const [cat, setCat] = useState(category);
  const [sort, setSort] = useState("ascending");
  //useEffect
  useEffect(() => {
    setFilteredProducts(
      cat === "all"
        ? products?.sort((a, b) => a.price - b.price)
        : products
            ?.sort((a, b) => b.price - a.price)
            .filter((product) => product.categories.includes(cat))
    );
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(cat);
    setFilteredProducts(
      products
        ?.filter((product) => {
          let temp = true;
          if (cat !== "all") {
            temp = product.categories.includes(cat);
          }
          if (size !== "none") {
            temp = temp && product.sizes.includes(size);
          }
          if (color !== "none") {
            temp = temp && product.colors.includes(color);
          }
          return temp;
        })
        .sort((a, b) => {
          if (sort === "ascending") {
            return a.price - b.price;
          }
          if (sort === "descending") {
            return b.price - a.price;
          }
        })
    );
  }, [cat, size, color, sort]);

  const handleChange = (event, type) => {
    if (type === "size") {
      setSize(event.target.value);
    } else if (type === "color") {
      setColor(event.target.value);
    } else if (type === "cat") {
      setCat(event.target.value);
    } else if (type === "sort") {
      setSort(event.target.value);
    }
  };
  return (
    <Container>
      <NavBar />
      <FilterContainer>
        <div>
          <FormControl fullWidth style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={size}
              label="Size"
              onChange={(e) => {
                let type = "size";
                handleChange(e, type);
              }}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"sm"}>sm</MenuItem>
              <MenuItem value={"md"}>md</MenuItem>
              <MenuItem value={"lg"}>lg</MenuItem>
              <MenuItem value={"xl"}>xl</MenuItem>
              <MenuItem value={"xxl"}>xxl</MenuItem>
              <MenuItem value={"3xl"}>3xl</MenuItem>
              <MenuItem value={"4xl"}>4xl</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={color}
              label="Color"
              onChange={(e) => {
                let type = "color";
                handleChange(e, type);
              }}
            >
              <MenuItem value={"none"}>None</MenuItem>
              <MenuItem value={"red"}>red</MenuItem>
              <MenuItem value={"blue"}>blue</MenuItem>
              <MenuItem value={"green"}>green</MenuItem>
              <MenuItem value={"yellow"}>yellow</MenuItem>
              <MenuItem value={"black"}>black</MenuItem>
              <MenuItem value={"white"}>white</MenuItem>
              <MenuItem value={"orange"}>orange</MenuItem>
              <MenuItem value={"brown"}>brown</MenuItem>
              <MenuItem value={"gray"}>gray</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={cat}
              label="Category"
              onChange={(e) => {
                let type = "cat";
                handleChange(e, type);
              }}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"men"}>men</MenuItem>
              <MenuItem value={"women"}>women</MenuItem>
              <MenuItem value={"shoes"}>shoes</MenuItem>
              <MenuItem value={"winter"}>winter</MenuItem>
              <MenuItem value={"summer"}>summer</MenuItem>
              <MenuItem value={"autumn"}>autumn</MenuItem>
              <MenuItem value={"spring"}>spring</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl fullWidth style={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sorting"
              onChange={(e) => {
                let type = "sort";
                handleChange(e, type);
              }}
            >
              <MenuItem value="ascending">ascending</MenuItem>
              <MenuItem value="descending">descending</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#140005",
              "&:hover": { bgcolor: "#35000d" },
              color: "white",
              padding: "15px 20px",
            }}
            onClick={() => {
              setCat("all");
            }}
          >
            View All
          </Button>
        </div>
      </FilterContainer>

      <Products products={filteredProducts} page="" />
      <Newsletters />
      <Footer />
    </Container>
  );
};

export default ProductList;
