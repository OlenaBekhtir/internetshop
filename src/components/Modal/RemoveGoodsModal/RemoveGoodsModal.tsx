import { FC } from "react";
import { useDeleteGoodsInLocalStore } from "../../../hooks/appHooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
import { removeGoodsFromCart } from "../../../store/cart/cartSlice";
import { Button } from "../../Button/Button";

interface IProps {
  closeModal: () => void;
}

export const RemoveGoodsModal: FC<IProps> = ({ closeModal }) => {
  const dispatch = useAppDispatch();
  const { title, goodsCart } = useAppSelector((state) => state.modal);
  const deleteGoodsInLocalStore = useDeleteGoodsInLocalStore();

  const removeFromCart = () => {
    deleteGoodsInLocalStore(goodsCart.id);
    dispatch(removeGoodsFromCart(goodsCart));
    closeModal();
  };

  return (
    <>
      <h2 className="modal__title">
        Ви дійсно хочете видалити з кошика <span>{title}</span>?
      </h2>
      <div className="modal__btn-wrapper">
        <Button
          btnClasses="btn"
          btnFunction={removeFromCart}
          btnText="Так"
        />
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
