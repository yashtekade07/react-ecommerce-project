import axios from "axios";

export const getOrders = (id) => async (dispatch) => {
  try {
    dispatch({ type: "orderRequest" });
    const { data } = await axios.get(
      `https://fake-ecommerce-app-api.onrender.com/order/user/${id}`,
      {
        withCredentials: true,
      },
    );
    dispatch({ type: "orderSuccess", payload: data.product });
  } catch (error) {
    dispatch({ type: "orderFail", payload: error.response.data.message });
  }
};
