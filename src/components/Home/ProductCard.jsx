/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../redux/actions/product.js";
import { useDispatch } from "react-redux";
const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  const dispatch = useDispatch();
  const productHandler = (e) => {
    dispatch(getSingleProduct(id));
  };
  return (
    <div className="m-4 flex flex-col">
      <div className="mb-4 h-full" onClick={productHandler}>
        <Link className="productCard" to={`/product/${id}`}>
          <img className="h-60" src={imgSrc} alt={name} />
          <p onClick={productHandler}>{name}</p>
          <span>{`₹${price}`}</span>
        </Link>
      </div>
      <button
        style={{
          height: "40px",
          width: "100%",
          backgroundColor: "orange",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
