import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {CartPage} from "./CartPage";
import {FavoritesPage} from "./FavoritesPage";
import {HomePage} from "./HomePage";

export const IndexRoutingPages: FC = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
  );
};
