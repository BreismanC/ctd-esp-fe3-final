import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from '../module/Home.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { data } = useContext(ContextGlobal);

  return (
    <>
      <h1>Home</h1>
      <div className={`${styles.card_grid}`}>
      {data.length ?
      data.map(dentist => <Card {...dentist} key={dentist.id} />)
      : null}
      </div>
    </>
  );
};

export default Home;
