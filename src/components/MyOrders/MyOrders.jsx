import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/order.js";
import { AiFillDelete } from "react-icons/ai";

const MyOrders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  const { order } = useSelector((state) => state.orders);
  if (!order || order.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto p-4">
      {/* {console.log(Object.keys(order[0].shippingAddress))} */}
      <h1 className="mb-4 text-2xl font-bold">Order History</h1>
      <div className="grid grid-cols-1 gap-4">
        {console.log(order[0].shippingAddress.firstName)}
        {order != null &&
          order.map((item) => (
            <div key={item.id} className="rounded border p-4">
              <div className="mb-2 flex justify-between">
                <div>
                  <span className="font-semibold">Order ID:</span> {item.id}
                </div>
                <div>
                  <span className="font-semibold">Date:</span> {item.date}
                </div>
              </div>
              <div>
                <span className="font-semibold">Total:</span> $
              </div>
              <div>
                <span className="font-semibold">Shipping Address:</span>
                <div>
                  {} {}
                </div>
                <div>{}</div>
                <div>{}</div>
                <div>
                  {}, {}
                </div>
                <div>Contact Number: {}</div>
              </div>
              <div>
                <span className="font-semibold">Payment Status:</span>{" "}
                {item.paymentStatus}
              </div>
              <div>
                <span className="font-semibold">Order Status:</span>{" "}
                {item.orderStatus}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyOrders;
