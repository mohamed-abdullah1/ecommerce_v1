import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletters from "../components/Newsletters";
import { Products } from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products page="home" />
      <Newsletters />
      <Footer />
    </div>
  );
};

export default Home;
