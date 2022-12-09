import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const getFavorite = () =>{
  const dataLocal = localStorage.getItem("favorite");
  return dataLocal ? JSON.parse(dataLocal) : [];
};
export const setFavorite = (dentist) => {
  const storageFavorite = getFavorite();
  const saveFavorite = storageFavorite.filter(favorite => {
      return favorite.id === dentist.id
  });
  if (!saveFavorite.length) {
      storageFavorite.push(dentist)
      localStorage.setItem("favorite", JSON.stringify(storageFavorite));
      alert("The dentist has been saved in favorites")
  }
}

export const isFavorite = (id) => {
  const dataLocal = getFavorite();
  const saveFavorite = dataLocal.filter(favorite => {
      return favorite.id === id
  });
  return saveFavorite.length === 1;
};


console.log(isFavorite);


export const removeFavorite = (id) => {
  let storageFavorite = getFavorite();
  const index = storageFavorite.findIndex(favorite => favorite.id === id);
  if (index !== -1) {
      storageFavorite.splice(index, 1);
      localStorage.setItem("favorite", JSON.stringify(storageFavorite));
      alert("The dentist has been removed");
  }
};


const Favs = () => {

  const localFavorites = getFavorite();

  return (
    <>
      <h1>Favorite dentist</h1>
      <div className="card-grid container">
        {localFavorites.length ? localFavorites.map((denstistFavorite) => <Card{...denstistFavorite} key={denstistFavorite.id}/>)
        : null}
      </div>
    </>
  );
};

export default Favs;
