import { createContext, useState } from 'react';
import React from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id: string) {
    setFavoriteMealIds(currentFavIds => {
      return [...currentFavIds, id];
    });
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
