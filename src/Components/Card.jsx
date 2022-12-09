import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { setFavorite, isFavorite, removeFavorite } from "../Routes/Favs";
import { StarFilled } from "@ant-design/icons";
import styles from '../module/Card.module.css'

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;

  const deleteFavorite = () => {
    removeFavorite(id);
  };

  const fav = isFavorite(id);

  // const { favs, changeFavs } = useContext(ContextGlobal);
  const [isFav, setIsFav] = useState(false);
  const addFavorite = () => {
    setFavorite({ name, username, id });
    setIsFav(!isFav);
  };

  return (
    <div className={`${styles.card} `}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/detail/${id}`} key="id" className={`${styles.a}`}>
        <div className={`${styles.image_container}`}>
          <span className={`${styles.div_span}`}>{id}</span>
          {isFav ? (
            <span className={`${styles.div_start}`}>
              <StarFilled />
            </span>
          ) : undefined}
          <img
            className={`${styles.card_image}`}
            src="/images/doctor.jpg"
            alt="doctor placeholder"
          />
        </div>
        <div className={`${styles.card_body}`}>
          <h2>{name}</h2>
          <h4>{username}</h4>
        </div>
      </Link>
      <button
        onClick={fav ? deleteFavorite : addFavorite}
        className={`${styles.favButton}`}
      >Add to favorite</button>
    </div>
  );
};

export default Card;
