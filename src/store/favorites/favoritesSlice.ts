import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  favorites: string[];
};

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<string>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
    addFavoritesFromLocalStorage: (state, action: PayloadAction<[]>) => {
      if (!state.favorites.length) {
        state.favorites = action.payload;
      }
    },
  },
});

export const { toggleFavorites, addFavoritesFromLocalStorage } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
