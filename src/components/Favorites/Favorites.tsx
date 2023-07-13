import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { IGoods } from "../../models";
import { Goods } from "../Goods/Goods";

export const Favorites: FC = () => {
  const goods = useAppSelector((state) => state.goods.goods);

  const favoritesListId = useAppSelector((state) => state.favorites.favorites);

  const [favorites, setFavorites] = useState<IGoods[]>([]);

  useEffect(() => {
    const res: IGoods[] = [];
    goods.forEach((goods) => {
      favoritesListId.forEach((id) => {
        if (goods.id === id) res.push(goods);
      });
    });

    setFavorites(res);
  }, [favoritesListId, goods]);

  const favoritesRender = favorites.map((goods) => (
    <Goods goods={goods} key={goods.id} />
  ));

  return (
    <>
      <h1 className="page-title">Обрані товари</h1>
      <ul className="goods-list">{favoritesRender}</ul>
    </>
  );
};
