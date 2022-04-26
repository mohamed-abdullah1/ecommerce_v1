import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import RequiredAuth from "./components/RequiredAuth";
import Global from "./components/styles/Global";
import AddProduct from "./pages/AddProduct";
import Analysis from "./pages/Analysis";
import Dashboard from "./pages/Dashboard";
import NavMenu from "./pages/NavMenu";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Signin from "./pages/Signin";
// import StripeTest from "./pages/StripeTest";
import Users from "./pages/Users";
function App() {
  const theme = {
    colors: {
      body: "#F5F7FA",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/"
            element={
              <RequiredAuth>
                <Dashboard />
              </RequiredAuth>
            }
          />
          <Route
            path="/addproduct"
            element={
              <RequiredAuth>
                <AddProduct />
              </RequiredAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequiredAuth>
                <Products />
              </RequiredAuth>
            }
          />
          <Route
            path="/orders"
            element={
              <RequiredAuth>
                <Orders />
              </RequiredAuth>
            }
          />
          <Route
            path="users"
            element={
              <RequiredAuth>
                <Users />
              </RequiredAuth>
            }
          />
          {/* <Route path="/stripetest" element={<StripeTest />} /> */}
          <Route
            path="/analysis"
            element={
              <RequiredAuth>
                <Analysis />
              </RequiredAuth>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
