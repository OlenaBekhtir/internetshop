import { FC, useEffect } from "react";

import { HeaderPage } from "../../pages/HeaderPage";
import { IndexRoutingPages } from "../../pages/IndexRoutingPages";

import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { fetchGoods } from "../../store/goods/fetchGoods";
import { addFavoritesFromLocalStorage } from "../../store/favorites/favoritesSlice";
import { addGoodsFromLocalStore } from "../../store/cart/cartSlice";

import { Portal } from "../Portal/Portal";
import { Modal } from "../Modal/Modal";

import "./App.scss";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { modalIsOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchGoods());
    }, 500);
  }, []);

  useEffect(() => {
    const localFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(addFavoritesFromLocalStorage(localFavorites));
    dispatch(addGoodsFromLocalStore(localCart));
  }, []);

  return (
    <div className="app">
      <div className="container">
        <HeaderPage />
        <IndexRoutingPages />
        {modalIsOpen && <Portal children={<Modal />} />}
        {}
      </div>
    </div>
  );
};
