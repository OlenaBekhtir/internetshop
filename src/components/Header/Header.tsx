import { FC, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HandySvg } from "handy-svg";
import { useAppSelector } from "../../hooks/storeHooks";

import "./Header.scss";

import logoImg from "../../resources/img/logo.jpg";
import cartImg from "../../resources/img/cart.png";
import star from "../../resources/img/star.svg";

export const Header: FC = () => {
  const favoritesCount = useAppSelector(
    (state) => state.favorites.favorites.length
  );
  const cartGoods = useAppSelector((state) => state.cart.cart);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cartGoods.forEach(({ cartAmount }) => {
      if (cartAmount) {
        count += cartAmount;
      }
    });
    setCartCount(count);
  }, [cartGoods]);

  return (
    <div className="wrap-header">
      <nav>
        <NavLink
          to="/home"
          className=
          {({ isActive }) =>
            isActive ? 'active-link' : 'link'
          }
        >
          Головна сторінка
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? 'active-link' : 'link'
          }
        >
          Кошик
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? 'active-link' : 'link'
          }
        >
          Обрані товари
        </NavLink>
      </nav>
      <div className="header">
        <div className="header__logo-link">
          <Link to="/home">
            <div className="header__logo-wrap">
              <img className="header__logo-img" src={logoImg} alt="Логотип" />
              <div className="header__logo-title">Інтернет-магазин "Оптичні прилади"</div>
            </div>
          </Link>
        </div>
        <div className="header__cart">
          <Link to="/cart">
            <img src={cartImg} alt="корзина" />
          </Link>
          <p className="header__cart-count">{cartCount > 0 && cartCount}</p>
        </div>
        <div className="header__favorites">
          <Link to="/favorites">
            <HandySvg src={star} />
          </Link>
          <p className="header__favorites-count">
            {favoritesCount > 0 && favoritesCount}
          </p>
        </div>
      </div>
    </div>
  );
};
