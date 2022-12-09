import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from '../module/Home.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dataApi } = useContext(ContextGlobal);
  return (
    <main className="">
      <h1>Home</h1>
      <div className={`${styles.card_grid}`}>
        {/* Aqui deberias renderizar las cards */}
        {dataApi.map((element) => {
          return <Card key={element.id} element={element} />;
        })}
      </div>
    </main>
  );
};

export default Home;
