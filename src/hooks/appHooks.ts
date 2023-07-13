import { IGoods } from "../models";

export const useAddGoodsInLocalStore = () => {
  return (goods: IGoods) => {
    const { color, id, name, price, url, artcl } = goods;
    const cartList: IGoods[] = JSON.parse(localStorage.getItem("cart") || "[]");

    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === goods.id) {
        cartList[i].cartAmount += 1;

        localStorage.setItem("cart", JSON.stringify(cartList));
        return;
      }
    }

    cartList.push({ color, id, name, price, url, artcl, cartAmount: 1 });
    localStorage.setItem("cart", JSON.stringify(cartList));
  };
};

export const useDeleteGoodsInLocalStore = () => {
  return (id: string) => {
    const localCart: IGoods[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const newLocalCart: IGoods[] = localCart.filter((goods) => goods.id !== id);

    localStorage.setItem("cart", JSON.stringify(newLocalCart));
  };
};
