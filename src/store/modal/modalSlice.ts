import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoods } from "../../models";

interface IModalState {
  modalIsOpen: boolean;
  addGoodsIsOpen: boolean;
  removeGoodsIsOpen: boolean;
  makePurchaseIsOpen: boolean;
  title: string;
  goodsCart: IGoods;
}

const initialState: IModalState = {
  modalIsOpen: false,
  addGoodsIsOpen: false,
  removeGoodsIsOpen: false,
  makePurchaseIsOpen: false,
  title: "",
  goodsCart: {
    cartAmount: 0,
    color: "",
    id: "",
    name: "",
    price: 0,
    url: "",
    artcl: 0,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openAddGoodsModal: (state, action: PayloadAction<IGoods>) => {
      state.modalIsOpen = true;
      state.addGoodsIsOpen = true;
      state.title = action.payload.name;
      state.goodsCart = action.payload;
    },
    openRemoveGoodsModal: (state, action: PayloadAction<IGoods>) => {
      state.modalIsOpen = true;
      state.removeGoodsIsOpen = true;
      state.title = action.payload.name;
      state.goodsCart = action.payload;
    },
    openMakePurchaseModal: (state) => {
      state.modalIsOpen = true;
      state.makePurchaseIsOpen = true;
    },
    closeModals: (state) => {
      state.addGoodsIsOpen = false;
      state.removeGoodsIsOpen = false;
      state.makePurchaseIsOpen = false;
      state.modalIsOpen = false;
    },
  },
});

export const {
  openAddGoodsModal,
  openRemoveGoodsModal,
  openMakePurchaseModal,
  closeModals } =
  modalSlice.actions;

export default modalSlice.reducer;
