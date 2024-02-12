import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Product from "./components/Product/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import MyOrders from "./components/MyOrders/MyOrders";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/myorders/" element={<MyOrders />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
