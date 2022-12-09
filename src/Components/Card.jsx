import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import {setFavorite, isFavorite, removeFavorite} from "../Routes/Favs";
import styles from "./module/Card.module.css";

const Card = ({ name, username, id }) => {
  const{ theme } = useContext(ContextGlobal)
  const darkMode = theme === "dark" || false

  const deleteFavorite = () => {
    removeFavorite(id);
  }

  const fav = isFavorite(id);
  
  const addFavorite = () => {
    setFavorite({name, username, id})
  };

  return (
    <div className={`card ${darkMode ? styles.cardDark : ''}`}>
      <img className="card-img-top" src="/images/doctor.jpg" alt="dentist placeholder" width={100} />
      <div className="card-body">
      <Link to={`/detail/${id}`}>
        <h6 className = "card-title">{name}</h6>
      </Link>
          <h5 className="card-text">{username}</h5>
          <button onClick={fav ? deleteFavorite : addFavorite} className="favButton"></button>
        </div> 
        </div>
  );
};

export default Card;
