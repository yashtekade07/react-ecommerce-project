import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import MyOrders from "./components/MyOrders";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Product from "./components/Product/ProductDetails"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
