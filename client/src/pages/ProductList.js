import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import { Products } from "../components/Products";
import axios from "axios";

const Container = styled.div``;
const Title = styled.h1`
  margin: 50px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 50px;
  margin-top: 0px;
`;
const FilterText = styled.span`
  font-size: 25px;
  font-weight: 500;
  margin-right: 10px;
`;
const Select = styled.select`
  padding: 10px 20px;
  margin-right: 10px;
`;
const Button = styled.button``;

const Option = styled.option``;
const ProductList = () => {
  const { category } = useParams();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const sizeRef = useRef();
  const colorRef = useRef();

  //useEffect
  useEffect(() => {
    let source = axios.CancelToken.source();

    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:9898/api/products/", {
          cancelToken: source.token,
        });
        console.log(res);
        setProducts(res.data);
        setFilteredProducts(
          category === "all"
            ? res.data
            : res.data.filter((product) =>
                product.categories.includes(category)
              )
        );
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        Object.entries(filter).every(([key, value]) =>
          product[`${key}s`].includes(value.toLowerCase())
        )
      )
    );
    sort === "Price (desc)"
      ? setProducts(products.sort((a, b) => a.price - b.price))
      : setProducts(products.sort((a, b) => b.price - a.price));
  }, [filter, sort]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //handlers
  const handleFilter = (e) =>
    setFilter({ ...filter, [e.target.name]: e.target.value });
  const handleSort = (e) => setSort(e.target.value);
  console.log(
    "filter",
    filter,
    "|||",
    "sort",
    sort,
    "|||",
    " category",
    category
  );
  const handleClick = () => {
    setFilteredProducts(products);
    colorRef.current.value = "Color";
    sizeRef.current.value = "Size";
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter:-</FilterText>
          <Select ref={sizeRef} name="size" onChange={handleFilter}>
            <Option disabled selected>
              Size
            </Option>
            <Option>sm</Option>
            <Option>md</Option>
            <Option>lg</Option>
            <Option>xl</Option>
            <Option>xxl</Option>
          </Select>
          <Select ref={colorRef} name="color" onChange={handleFilter}>
            <Option disabled selected>
              Color
            </Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>gray</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:-</FilterText>
          <Select onChange={handleSort}>
            <Option disabled selected>
              Cost
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc) </Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>
            <Button onClick={handleClick}>View All</Button>
          </FilterText>
        </Filter>
      </FilterContainer>

      <Products products={filteredProducts} page="home" />
      <Newsletters />
      <Footer />
    </Container>
  );
};

export default ProductList;
