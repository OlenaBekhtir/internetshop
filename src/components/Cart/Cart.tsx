import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Goods } from "../Goods/Goods";
import { openMakePurchaseModal } from "../../store/modal/modalSlice";
import { Button } from "../Button/Button";


interface IProps {}

export const Cart: FC<IProps> = ({}) => {
  const dispatch = useAppDispatch();
  const cartList = useAppSelector((state) => state.cart.cart);

  const cartRender = cartList.map((goods) => (
    <Goods goods={goods} key={goods.id} btnDelete={true} />
  ));

interface goods {
  price: number;
  cartAmount: number;
}

const calculateCartTotal = (cartList: goods[]): number => {
  return cartList.reduce((total: number, product: goods) => {
    return total + (product.price * product.cartAmount);
  }, 0);
};

const cartTotal = calculateCartTotal(cartList);

const makePurchase = () => {
  dispatch(openMakePurchaseModal());
};

  return (
    <>
      <h1 className="page-title">Кошик</h1>
      {cartList.length > 0 && (
        <div style={{ textAlign: "center", margin: "25px 0" }}>
          <Button
            btnText="Оформити покупку"
            btnFunction={makePurchase}
            btnClasses="btn"
          />
        </div>
      )}
      <ul className="goods-list">{cartRender}</ul>
      <h2 className="total-price">Загальна вартість: <span>{cartTotal}</span> грн.</h2>
    </>
  );
};
