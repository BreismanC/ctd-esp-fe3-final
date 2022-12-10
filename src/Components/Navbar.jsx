import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "../module/Navbar.module.css";

const Navbar = () => {
  const { theme, setThemeDark, setThemeLight } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (darkMode) setThemeLight();
    else setThemeDark();
  };

  return (
    <header>
      <nav className={`${styles.navContainer} ${darkMode ? styles.navBarDark  : ""}`}>
          <div className={`${styles.container}`}>
            <ul className={`${styles.setNav}`}>
              <li>
              <Link to="/home" className={`${styles.navbarBrand}`} >
              DH Odontology
              </Link>
              </li>
              <div className={`${styles.containerRoutes}`}>
              <li className={`${styles.linkNav}`}>
                <Link to="/home" className={`${styles.sizeAncle}`} >
                  Home
                </Link>
              </li>
              <li className={`${styles.linkNav}`}>
                <Link to="/favs" className={`${styles.sizeAncle}`} >
                  Favorite
                </Link>
              </li>
              <li to="/Contact" className={` ${styles.linkNav}`}>
                <Link className={`${styles.sizeAncle}`} >
                  Contact
                </Link>
              </li>
              </div>
              <li className={`${styles.linkNav}`}>
                <button
                  className={`${darkMode ? "" : styles.btndark} ${
                    styles.btnStyle
                  }`}
                  onClick={changeTheme}
                >
                  {darkMode ? "☀️" : "🌙"}{" "}
                </button>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
