import { createSlice } from "@reduxjs/toolkit";
import { IGoods } from "../../models";
import { fetchGoods } from "./fetchGoods";

type GoodsState = {
  goods: IGoods[];
  loading: boolean;
  error: string | null;
};

const initialState: GoodsState = {
  goods: [],
  loading: true,
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
          state.loading = false;
        }
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.goods = action.payload;
        state.loading = false;
        state.error = null;
      });
  },
});

export default goodsSlice.reducer;
