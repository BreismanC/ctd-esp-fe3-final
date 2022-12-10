import React from "react";
import { useState, useReducer, useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import Swal from "sweetalert2";
import AlertError, {
  initialStateVisible,
  actionsVisible,
  validationReducer,
} from "./utils/AlertError";
import styles from "../module/Form.module.css";

const Form = () => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [validation, setValidation] = useState(false);
  const [visible, dispatchValidation] = useReducer(
    validationReducer,
    initialStateVisible
  );

  const nameValidation = () => {
    setValidation(false);
    let userName = values.name.split(" ");
    if (userName.length < 2) {
      return dispatchValidation({
        type: actionsVisible.setNameFirstVal,
        payload: true,
      });
    }
    if (userName[0].length < 3 && userName[1].length < 3)
      return dispatchValidation({
        type: actionsVisible.setNameSecordVal,
        payload: true,
      });
    return true;
  };

  const emailValidation = () => {
    setValidation(false);
    let userEmail = values.email.split("@");
    if (userEmail.length < 2)
      return dispatchValidation({
        type: actionsVisible.setEmailFirstVal,
        payload: true,
      });

    let anotherValidation = userEmail[1].split(".");
    if (anotherValidation.length < 2)
      return dispatchValidation({
        type: actionsVisible.setEmailSecondVald,
        payload: true,
      });

    return true;
  };

  const handleChanges = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newValue = {
      ...values,
      [name]: value,
    };
    setValues(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchValidation({ type: actionsVisible.setInitialState });
    let validationName = nameValidation();

    let validationEmail = emailValidation();
    if (validationName && validationEmail) {
      setValidation(true);
      dispatchValidation({ type: actionsVisible.setInitialState });
      Swal.fire({
        icon: "success",
        iconColor: "rgb(183, 235, 143)",
        background: "rgb(227, 224, 222)",
        title: "¡Thanks!",
        confirmButtonColor: "rgb(183, 235, 143)",
        text: `Thank you for contacting us ${values.name}, an assistant will be contacted as soon as possible!`,
      });
    }
  };

  return (
    <div className={`${styles.container_form} ${darkMode ? styles.dark : ""}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className={styles.input_form}
          onChange={handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          className={styles.input_form}
          onChange={handleChanges}
        />
        <button className={styles.button_form} type="submit">
          Send
        </button>
      </form>
      {validation ? (
        <h3 className={`${darkMode ? styles.dark : ""} ${styles.h3}`}>
          Thank you for contacting us {values.name}, an assistant will be
          contacted as soon as possible!
        </h3>
      ) : (
        <div className={styles.container_alert}>
          {visible.nameFirstVal ? (
            <AlertError
              message={"Please enter first and last name"}
              actionName={actionsVisible.setNameFirstVal}
              setVisible={dispatchValidation}
            />
          ) : undefined}
          {visible.nameSecordVal ? (
            <AlertError
              message={"Please enter a valid first or last name"}
              actionName={actionsVisible.setNameSecordVal}
              setVisible={dispatchValidation}
            />
          ) : undefined}
          {visible.emailFirstVal ? (
            <AlertError
              message={
                "Incorrect email, must contain an '@' and a valid extension such as '.com'"
              }
              actionName={actionsVisible.setEmailFirstVal}
              setVisible={dispatchValidation}
            />
          ) : undefined}
          {visible.emailSecondVald ? (
            <AlertError
              message={
                "Incorrect email, must contain an '@' and a valid extension such as '.com'"
              }
              actionName={actionsVisible.setEmailSecondVald}
              setVisible={dispatchValidation}
            />
          ) : undefined}
        </div>
      )}
    </div>
  );
};

export default Form;
