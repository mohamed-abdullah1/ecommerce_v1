import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WashList from "./pages/WashList";
import RequestAuth from "./components/RequestAuth";
import NotFound from "./pages/NotFound";
import OrdersHistory from "./pages/OrdersHistory";
import UserInfo from "./pages/UserInfo";
import Temp from "./pages/Temp";
import RequestAuthAdmin from "./components/RequestAuthAdmin";
import NavMenu from "./pages/NavMenu";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Users from "./pages/Users";
import Analysis from "./pages/Analysis";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<RequestAuth />}>
            <Route path="/" element={<Home />} />
            <Route path="products/:category" element={<ProductList />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="washlist" element={<WashList />} />
            <Route path="ordershistory" element={<OrdersHistory />} />
            <Route path="userinfo" element={<UserInfo />} />
            <Route path="temp" element={<Temp />} />
          </Route>
          <Route element={<RequestAuthAdmin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="analysis" element={<Analysis />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
