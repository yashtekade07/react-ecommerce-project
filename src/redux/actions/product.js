import axios from "axios";

export const getProducts =
  ({ page = 1, category = "", minPrice = 0, maxPrice = 100000 }) =>
  async (dispatch) => {
    try {
      dispatch({ type: "productRequest" });
      const { data } = await axios.get(
        `https://fake-ecommerce-app-api.onrender.com/products?limit=8&page=${page}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      );
      dispatch({ type: "productSuccess", payload: data });
    } catch (error) {
      console.log(error);
      // dispatch({ type: "loadUserFail", payload: error.response.data.message });
    }
  };
export const getSingleProduct = (id) => async (dispatch) => {
  console.log("Bye");
  console.log(id);
  try {
    dispatch({ type: "getSingleProductRequest" });
    const { data } = await axios.get(
      `https://fake-ecommerce-app-api.onrender.com/products/${id}`,
      console.log(id),
    );
    dispatch({ type: "getSingleProductSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getSingleProductFail",
      payload: error.response.data.message,
    });
  }
};
