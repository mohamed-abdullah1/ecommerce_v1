//imports
import { Products } from "../components/Products";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "./styles/WashList.styled";

//component function
const WashList = () => {
  const { washList } = useSelector((state) => state.user);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <NavBar />
      <h2
        style={{
          width: "100vw",
          fontWeight: "300",
          fontSize: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Wish List
      </h2>
      <Products products={washList} page="washlist" />
      <Footer page={location.pathname} />
    </Container>
  );
};

export default WashList;
