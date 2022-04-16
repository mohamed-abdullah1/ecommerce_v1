//imports
import { Products } from "../components/Products";
import styled from "styled-components";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//styled Components
const Container = styled.div`
  padding: 20px;
`;

//component function
const WashList = () => {
  const { washList } = useSelector((state) => state.user);
  return (
    <Container>
      <NavBar />
      <Products products={washList} page="washlist" />
      <Footer />
    </Container>
  );
};

export default WashList;
