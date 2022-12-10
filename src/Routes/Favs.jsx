import React from "react";
import Card from "../Components/Card";
import styles from "../module/Favs.module.css";
import Swal from "sweetalert2";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
export const getFavorite = () => {
  const dataLocal = localStorage.getItem("favorite");
  return dataLocal ? JSON.parse(dataLocal) : [];
};
export const setFavorite = (dentist) => {
  const storageFavorite = getFavorite();
  const saveFavorite = storageFavorite.filter((favorite) => {
    return favorite.id === dentist.id;
  });
  if (!saveFavorite.length) {
    storageFavorite.push(dentist);
    localStorage.setItem("favorite", JSON.stringify(storageFavorite));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "The dentist has been saved in favorites",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

export const isFavorite = (id) => {
  const dataLocal = getFavorite();
  const saveFavorite = dataLocal.filter((favorite) => {
    return favorite.id === id;
  });
  return saveFavorite.length === 1;
};

export const removeFavorite = (id) => {
  let storageFavorite = getFavorite();
  const index = storageFavorite.findIndex((favorite) => favorite.id === id);
  if (index !== -1) {
    storageFavorite.splice(index, 1);
    localStorage.setItem("favorite", JSON.stringify(storageFavorite));
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "The dentist has been removed",
      showConfirmButton: false,
      timer: 2000,
    });
  }
};

const Favs = () => {
  const localFavorites = getFavorite();

  return (
    <>
      <h1>Favorite dentist</h1>
      <div className={`${styles.card_grid}`}>
        {localFavorites.length
          ? localFavorites.map((denstistFavorite) => (
              <Card {...denstistFavorite} key={denstistFavorite.id} />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
