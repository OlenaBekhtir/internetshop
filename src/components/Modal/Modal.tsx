import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { closeModals } from "../../store/modal/modalSlice";
import { AddGoodsModal } from "./AddGoodsModal/AddGoodsModal";
import { RemoveGoodsModal } from "./RemoveGoodsModal/RemoveGoodsModal";
import { MakePurchaseModal } from "./MakePurchaseModal/MakePurchaseModal";
import "./Modal.scss";

export const Modal: FC = () => {
  const dispatch = useAppDispatch();
  const { addGoodsIsOpen, removeGoodsIsOpen, makePurchaseIsOpen } = useAppSelector(
    (state) => state.modal
  );

  const closeModal = () => {
    document.body.classList.remove("open-modal");
    dispatch(closeModals());
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {addGoodsIsOpen && <AddGoodsModal closeModal={closeModal} />}
        {removeGoodsIsOpen && <RemoveGoodsModal closeModal={closeModal} />}
        {makePurchaseIsOpen && <MakePurchaseModal closeModal={closeModal} />}
      </div>
    </div>
  );
};
