import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer({}, (builder) => {
  builder
    .addCase("productRequest", (state) => {
      state.loading = true;
    })
    .addCase("productSuccess", (state, action) => {
      state.loading = false;
      state.product = action.payload.products;
      state.message = action.payload.message;
    })
    .addCase("productFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});
export const singleProductReducer = createReducer({}, (builder) => {
  builder
    .addCase("getSingleProductRequest", (state) => {
      state.loading = true;
    })
    .addCase("getSingleProductSuccess", (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
      state.message = action.payload.message;
    })
    .addCase("getSingleProductFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});

export const cartReducer = createReducer(
  {
    cartItems: [],
    total: 0,
  },
  (builder) => {
    builder
      .addCase("addToCart", (state, action) => {
        const item = action.payload;
        const isItemExist = state.cartItems.find((i) => i.id === item.id);

        if (isItemExist) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) i.quantity += 1;
          });
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase("decreament", (state, action) => {
        const item = state.cartItems.find((i) => i.id === action.payload);

        if (item.quantity > 1) {
          state.cartItems.forEach((i) => {
            if (i.id === item.id) i.quantity -= 1;
          });
        } else {
          state.cartItems = state.cartItems.filter(
            (i) => i.id !== action.payload,
          );
        }
      })

      .addCase("removeFromCart", (state, action) => {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload,
        );
      })

      .addCase("calculateprice", (state) => {
        let sum = 0;
        state.cartItems.forEach((i) => {
          sum += i.price * i.quantity;
        });
        state.subTotal = sum;
      });
  },
);

export const orderReducer = createReducer({order: [],}, (builder) => {
    builder
      .addCase('orderRequest',(state) => {
        state.loading = true;
      })
      .addCase('orderSuccess',(state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase('orderFail',(state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
});
