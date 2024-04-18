//React components
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import { Navbar } from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCatecory";
import Product from "./Pages/Product";
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'

//Styles
import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="man" />} />
          <Route path="/women" element={<ShopCategory category="woman" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
