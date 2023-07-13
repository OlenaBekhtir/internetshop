import { FC } from "react";
import { useAddGoodsInLocalStore } from "../../../hooks/appHooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { addGoodsToCart } from "../../../store/cart/cartSlice";
import { Button } from "../../Button/Button";

interface IProps {
  closeModal: () => void;
}

export const AddGoodsModal: FC<IProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { title, goodsCart } = useAppSelector((state) => state.modal);
  const addGoodsInLocalStore = useAddGoodsInLocalStore();

  const addToCart = () => {
    addGoodsInLocalStore(goodsCart);
    dispatch(addGoodsToCart(goodsCart));
    closeModal();
  };

  return (
    <>
      <h2 className="modal__title">
        Ви хочете додати <span>{title}</span> в кошик?
      </h2>
      <div className="modal__btn-wrapper">
        <Button btnClasses="btn" btnFunction={addToCart} btnText="Так" />
        <Button btnClasses="btn" btnFunction={closeModal} btnText="Ні" />
      </div>
      <Button
        btnFunction={closeModal}
        btnCross={true}
        btnClasses="btn btn__cross"
      />
    </>
  );
};
