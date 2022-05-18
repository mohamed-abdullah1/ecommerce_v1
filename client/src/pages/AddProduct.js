import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
  BasicInfo,
  Options,
  Container,
  Info,
  TopCom,
  Wrapper,
  Form,
  BtnContainer,
} from "./stylesAdmin/AddProduct.styled";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";

const categoriesOptions = [
  "men",
  "women",
  "shoes",
  "winter",
  "summer",
  "autumn",
  "spring",
];
const colorsOptions = [
  "red",
  "yellow",
  "black",
  "purple",
  "green",
  "brown",
  "white",
];
const sizesOptions = ["sm", "md", "lg", "xl", "xxl", "xxxl"];
const AddProduct = () => {
  //variables
  const [categories, setCategories] = useState([categoriesOptions[0]]);
  const [colors, setColors] = useState([colorsOptions[0]]);
  const [sizes, setSizes] = useState([sizesOptions[0]]);
  const [productTitle, setProductTitle] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [stock, setStock] = useState();
  const [price, setPrice] = useState();
  const { accessToken } = useSelector((state) => state.user.currentUser);
  const [response, setResponse] = useState({ done: false, resObject: {} });
  const navigate = useNavigate();
  //useEffects
  useEffect(() => {
    console.log(response);
    if (response.done) {
      navigate("/products", { state: response.resObject });
    }
  }, [response]);

  //async functions
  const postProduct = async (newProduct) => {
    try {
      const res = await axios.post(
        "http://localhost:9898/api/products/",
        newProduct,
        { headers: { token: `Bearer ${accessToken}` } }
      );
      console.log(res);
      setResponse({ done: true, resObject: res });
    } catch (err) {
      console.log("catch error", err);
      setResponse({ done: false, resObject: err });
    }
  };
  //handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      categories,
      colors,
      sizes,
      title: productTitle,
      desc: description,
      img: imageUrl,
      price,
      countInStock: stock,
    };
    console.log(newProduct);
    postProduct(newProduct);
  };

  //return function
  return (
    <>
      <NavMenu />
      <Container>
        <Wrapper>
          <TopCom>
            <h1>ADD PRODUCT</h1>
          </TopCom>
          <Form onSubmit={handleSubmit}>
            <Info>
              <BasicInfo>
                <h4>Basic Information</h4>
                <div>
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Product Title"
                    sx={{ width: "100%" }}
                    onChange={(e) => setProductTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Description Title"
                    sx={{ width: "100%" }}
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Image Url"
                    sx={{ width: "100%" }}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Price"
                    sx={{ width: "100%" }}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Number of products in stock"
                    sx={{ width: "100%" }}
                    onChange={(e) => setStock(e.target.value)}
                    required
                  />
                </div>
              </BasicInfo>
              <Options>
                <div>
                  <h1>Categories</h1>
                  <div>
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={categoriesOptions}
                      getOptionLabel={(option) => option}
                      defaultValue={[categoriesOptions[0]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="filterSelectedOptions"
                          placeholder="Categories"
                          required={
                            params.InputProps.startAdornment?.length > 0
                              ? false
                              : true
                          }
                        />
                      )}
                      onChange={(e, newVal) => setCategories(newVal)}
                    />
                  </div>
                </div>
                <div>
                  <h1>Colors</h1>
                  <div>
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={colorsOptions}
                      getOptionLabel={(option) => option}
                      defaultValue={[colorsOptions[0]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="filterSelectedOptions"
                          placeholder="Color"
                          required={
                            params.InputProps.startAdornment?.length > 0
                              ? false
                              : true
                          }
                        />
                      )}
                      onChange={(e, newVal) => setColors(newVal)}
                    />
                  </div>
                </div>
                <div>
                  <h1>Sizes</h1>
                  <div>
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={sizesOptions}
                      getOptionLabel={(option) => option}
                      defaultValue={[sizesOptions[0]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="filterSelectedOptions"
                          placeholder="Size"
                          required={
                            params.InputProps.startAdornment?.length > 0
                              ? false
                              : true
                          }
                        />
                      )}
                      onChange={(e, newVal) => setSizes(newVal)}
                    />
                  </div>
                </div>
              </Options>
            </Info>
            <BtnContainer>
              <Button
                variant="contained"
                sx={{
                  marginTop: 3,
                  height: "50%",
                  width: "100px",
                  bgcolor: "#060b26",
                  fontWeight: "400",
                  fontSize: "16px",
                  padding: "20px 80px",
                  "&:hover": {
                    bgcolor: "#1a83ff",
                  },
                }}
                type="submit"
              >
                Save
              </Button>
            </BtnContainer>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default AddProduct;
