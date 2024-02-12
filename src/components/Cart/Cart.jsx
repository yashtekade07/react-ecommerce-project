/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
const Cart = () => {
  const { cartItems, subTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increament = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculateprice" });
  };

  const decreament = (id) => {
    dispatch({
      type: "decreament",
      payload: id,
    });

    dispatch({ type: "calculateprice" });
  };

  const deletehandler = (id) => {
    dispatch({
      type: "removeFromCart",
      payload: id,
    });
    dispatch({ type: "calculateprice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              imgSrc={i.imgSrc}
              increament={increament}
              decreament={decreament}
              deletehandler={deletehandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Total :${subTotal}</h2>
      </aside>
    </div>
  );
};
const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decreament,
  increament,
  deletehandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decreament(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increament(id)}>+</button>
    </div>

    <AiFillDelete onClick={() => deletehandler(id)} />
  </div>
);
export default Cart;
