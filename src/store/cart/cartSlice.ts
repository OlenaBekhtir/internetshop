import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../../models";

type CartState = {
  cart: IGoods[];
};

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addGoodsToCart: (state, action: PayloadAction<IGoods>) => {
      let wasAddedCartAmount = false;
      state.cart.forEach((item) => {
        if (item.id === action.payload.id && item.cartAmount) {
          item.cartAmount += 1;
          wasAddedCartAmount = true;
          return;
        }
      });
      if (!wasAddedCartAmount) {
        const newGoods: IGoods = {
          name: action.payload.name,
          price: action.payload.price,
          color: action.payload.color,
          id: action.payload.id,
          url: action.payload.url,
          artcl: action.payload.artcl,
          cartAmount: 1,
        };
        state.cart.push(newGoods);
      }
    },
    removeGoodsFromCart: (state, action: PayloadAction<IGoods>) => {
      state.cart = state.cart.filter((goods) => goods.id !== action.payload.id);
    },
    removeAllGoodsFromCart: (state) => {
      state.cart = [];
    },
    addGoodsFromLocalStore: (state, action: PayloadAction<IGoods[]>) => {
      action.payload.forEach((goods) => {
        state.cart.push(goods);
      });
    },
  },
});

export const { 
  addGoodsToCart, 
  removeGoodsFromCart,
  removeAllGoodsFromCart, 
  addGoodsFromLocalStore } =
  cartSlice.actions;
export default cartSlice.reducer;
