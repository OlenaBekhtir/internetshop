import { FC, useEffect, useState } from "react";
import { HandySvg } from "handy-svg";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { toggleFavorites } from "../../store/favorites/favoritesSlice";
import {
  openAddGoodsModal,
  openRemoveGoodsModal,
} from "../../store/modal/modalSlice";

import { IGoods } from "../../models";

import "./Goods.scss";

import star from "../../resources/img/star.svg";
import { Button } from "../Button/Button";

interface IProps {
  goods: IGoods;
  btnDelete?: boolean;
}

export const Goods: FC<IProps> = ({ goods, btnDelete = false }) => {
  const { name, price, url, color, artcl, id, cartAmount } = goods;
  const dispatch = useAppDispatch();
  const favoritesStore = useAppSelector((state) => state.favorites.favorites);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesStore.includes(id));
  }, [favoritesStore]);

  const toggleFavoriteInLocalStore = (id: string) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.includes(id)) {
      favorites = favorites.filter((item: string) => item !== id);
    } else {
      favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const addGoodsToCart = () => {
    document.body.classList.add("open-modal");
    dispatch(openAddGoodsModal(goods));
  };

  const removeGoodsFromCart = () => {
    document.body.classList.add("open-modal");
    dispatch(openRemoveGoodsModal(goods));
  };

  return (
    <li className="goods">
      <img src={url} alt={name} className="goods__img" />
      <h2 className="goods__title">{name}</h2>
      <p className="goods__price">Ціна: {price} грн.</p>
      <p className="goods__color">Колір: {color}</p>
      <p>Артикул: {artcl}</p>
      {cartAmount > 0 && (
        <p className="goods__count">В корзині: {cartAmount}</p>
      )}
      <div className="goods__actions-wrapper">
        {
          <Button
            btnClasses="btn"
            btnFunction={addGoodsToCart}
            btnText="Додати в кошик"
          />
        }
        <div
          className={classNames("goods__favorite", {
            "goods__favorite--active": isFavorite,
          })}
          onClick={() => {
            dispatch(toggleFavorites(id));
            toggleFavoriteInLocalStore(id);
          }}
        >
          <HandySvg src={star} />
        </div>
      </div>
      {btnDelete && (
        <Button
          btnClasses="btn btn__cross"
          btnFunction={removeGoodsFromCart}
          btnCross={true}
        />
      )}
    </li>
  );
};
