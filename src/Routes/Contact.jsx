import React, {useContext} from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";
import styles from "../module/Contact.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  return (
    <div className={`${styles.container_form} ${darkMode ? styles.dark : ""}`}>
      <h2 className={`${styles.sizeTitle}`}>Want to know more?</h2>
      <p className={`${styles.sizeText}`}>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
