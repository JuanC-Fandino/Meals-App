import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoriteAction {
  id: string;
}

export type FavoriteState = {
  ids: string[];
};

const initialState: FavoriteState = {
  ids: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteAction>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<FavoriteAction>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
