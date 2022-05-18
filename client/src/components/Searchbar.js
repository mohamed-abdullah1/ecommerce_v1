import {
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  CloseIcon,
  SearchResults,
  SearchProducts,
  SearchProduct,
  LoadingContainer,
  Nothing,
} from "./styles/Searchbar.styled";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useClickOutside } from "react-click-outside-hook";
import useFetch from "./customHooks/useFetch";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

export const Searchbar = () => {
  const [isExpand, setIsExpand] = useState(false);
  // const [loading, setLoading] = useState(fetchLoading);
  const [ref, isClicked] = useClickOutside();
  const [query, setQuery] = useState("");
  const {
    data: products,
    loading: fetchLoading,
    error,
  } = useFetch("http://localhost:9898/api/products/");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();
  const variants = {
    expand: {
      height: "20em",
    },
    collapse: {
      height: "3.1em",
    },
  };

  //functions
  const expandAction = () => {
    setIsExpand(true);
    // setLoading(false);
  };
  const collapseAction = () => {
    setIsExpand(false);
  };
  useEffect(() => {
    if (isClicked) collapseAction();
  }, [isClicked]);
  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (item) =>
          item.title.toUpperCase().includes(query.toUpperCase()) &&
          item.countInStock > 0
      )
    );
  }, [query]);
  return (
    <>
      <SearchContainer
        ref={ref}
        variants={variants}
        animate={isExpand ? "expand" : "collapse"}
      >
        <SearchWrapper>
          <SearchIcon>
            <IoSearchOutline />
          </SearchIcon>

          <SearchInput
            placeholder="Search for any Product"
            onFocus={expandAction}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CloseIcon>
            {isExpand && <AiOutlineClose onClick={collapseAction} />}
          </CloseIcon>
        </SearchWrapper>
        {isExpand && fetchLoading && (
          <SearchResults>
            <LoadingContainer>
              <MoonLoader loading={fetchLoading} size={27} color="black" />
            </LoadingContainer>
          </SearchResults>
        )}
        {isExpand && !fetchLoading && (
          <SearchResults>
            <SearchProducts>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <SearchProduct
                    onClick={() =>
                      navigate(`/product/${item._id}`, { state: item._id })
                    }
                  >
                    <p>
                      <span>{item.title}</span> <br />
                      <span>{item.price}$</span> <br />
                      <span>
                        <Rating
                          name="simple-controlled"
                          value={item.rating}
                          size="small"
                          readOnly
                          precision={0.5}
                        />
                      </span>
                    </p>
                    <div>
                      <img src={item.img} />
                    </div>
                  </SearchProduct>
                ))
              ) : (
                <Nothing>
                  <p>No thing To Show</p>
                </Nothing>
              )}
            </SearchProducts>
          </SearchResults>
        )}
      </SearchContainer>
    </>
  );
};
