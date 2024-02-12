/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import MetaData from "../layout/MetaData.jsx";
import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader.jsx";
import toast from "react-hot-toast";
import { getProducts } from "../../redux/actions/product.js";
import { useState } from "react";
import ProductCard from "./ProductCard";
const Home = () => {
  const btns = new Array(30).fill(1);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [page, setPage] = useState(1);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setPrice] = useState(100000);
  const category = "";
  useEffect(() => {
    dispatch(getProducts({ page, category, minPrice, maxPrice }));
  }, [dispatch, page, category, maxPrice, minPrice]);

  const addtocardhandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculateprice" });
    toast.success("Added to Cart");
  };

  return (
    <div>
      <MetaData title="ECOMMERCE" />

      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>Scroll {CgMouse}</button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        {product &&
          product.map((product) => (
            <ProductCard
              key={product.id}
              name={product.title}
              imgSrc={product.image}
              price={product.price}
              id={product.id}
              handler={addtocardhandler}
            />
          ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "80vmax",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          overflowX: "auto", // Horizontal scrollbar if content overflows
          whiteSpace: "wrap", // Prevent items from wrapping to the next line
          padding: "10px", // Add some padding for spacing
        }}
      >
        {btns.map((item, index) => (
          <button
            style={{
              backgroundColor: "#000",
              color: "#fff",
              margin: "10px 20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s ease",
            }}
            key={index}
            id={index}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
