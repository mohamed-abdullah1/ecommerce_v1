import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Global from "./components/styles/Global";
import Signin from "./pages/Signin";
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
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
