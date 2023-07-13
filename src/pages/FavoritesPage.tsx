import { FC } from "react";
import { Favorites } from "../components/Favorites/Favorites";
import { Footer } from "../components/Footer/Footer";

export const FavoritesPage: FC = () => {
  return <div>
    <Favorites />;
    <Footer />
  </div>
};
