import { FC } from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { Goods } from "../Goods/Goods";

import "./Home.scss";

export const Home: FC = () => {
  const { loading, goods } = useAppSelector((state) => state.goods);

  const renderGoods = goods.map((goods) => (
    <Goods goods={goods} key={goods.id} />
  ));

  return (
    <div className="home">
      <h1 className="page-title">Головна сторінка</h1>
      {loading && <div className="store-message">Loading...</div>}
      <ul className="goods-list">{renderGoods}</ul>
    </div>
  );
};
