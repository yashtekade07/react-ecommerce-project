import axios from "axios";

export const getOrders = () => async (dispatch) => {
  try {
    dispatch({ type: "orderRequest" });
    const { data } = await axios.get(
      `https://fake-ecommerce-app-api.onrender.com/orders/user/1`,
    );
    dispatch({ type: "orderSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "orderFail", payload: error.response.data.message });
  }
};
