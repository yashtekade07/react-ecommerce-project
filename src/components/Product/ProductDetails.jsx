import { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData.jsx";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.singleProduct);
  const addtocardhandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculateprice" });
    toast.success("Added to Cart");
  };
  return (
    <div>
      <MetaData title={`${singleProduct.title} -- ECOMMERCE`} />
      <div className="ProductDetails">
        <div>
          <img
            className="Image"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{singleProduct.title}</h2>
            <p>Product # {singleProduct.id}</p>
          </div>
          <div className="detailsBlock-3">
            <h1>{`₹${singleProduct.price}`}</h1>
            <div className="detailsBlock-3-1">
              <button
                onClick={addtocardhandler({
                  name: singleProduct.title,
                  price: singleProduct.price,
                  id: singleProduct.id,
                  quantity: 1,
                  imgSrc: singleProduct.image,
                })}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="detailsBlock-4">
            Description : <p>{singleProduct.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
