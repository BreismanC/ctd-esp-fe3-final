import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {setFavorite, isFavorite, removeFavorite} from "../Routes/Favs";
import { StarFilled } from "@ant-design/icons";
import styles from "../module/Card.module.css";

const Card = ({ name, username, id }) => {
  const{ theme } = useContext(ContextGlobal)
  const darkMode = theme === "dark" || false

  const deleteFavorite = () => {
    removeFavorite(id);
  }

  const fav = isFavorite(id);

  const { favs, changeFavs } = useContext(ContextGlobal);
  const [isFav, setIsFav] = useState(false);
  const addFavorite = () => {
    setFavorite({name, username, id})
    setIsFav(!isFav);
    changeFavs(element);
  };

  return (
    <div className={`${styles.card} card ${darkMode ? styles.cardDark : ''}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link
        to={`/detail/${element.id}`}
        key="element.id"
        className={`${styles.a}`}
      >
        <div className={`${styles.image_container}`}>
          <span className={`${styles.div_span}`}>{element.id}</span>
          {isFav ? (
            <span className={`${styles.div_start}`}>
              <StarFilled />
            </span>
          ) : undefined}
          <img
            className={`${styles.card_image}`}
            src="/images/doctor.jpg"
            alt="doctor placeholder"
            width={100}
          />
        </div>
        <div className={`${styles.card_body}`}>
          <h2>{element.name}</h2>
          <h4>{element.username}</h4>
        </div>
      </Link>
          <h5 className="card-text">{username}</h5>
          <button onClick={fav ? deleteFavorite : addFavorite} className={`${styles.favButton}`}></button>
        </div>
  );
};

export default Card;
