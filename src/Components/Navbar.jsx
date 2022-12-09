import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import styles from "../module/Navbar.module.css";


const Navbar = () => {
  const { theme , setThemeDark, setThemeLight } = useContext(ContextGlobal)
  const darkMode = theme === "dark" || false

  const changeTheme = () => {

    if (darkMode) setThemeLight()

    else setThemeDark()
  }

  return (
    <header className="sticky-top">
      <nav
        className={`navbar navbar-expand-sm ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
        aria-label="Third navbar example"
      >
        <div className="container">
          <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
            DH Odontology
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/favs">
                  Favorite
                </Link>
              </li>
              <li className={`nav-item ${styles.navBarLink}`}>
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className={`nav-item`}>
                <button
                  className={`btn btn-${darkMode ? "light" : "dark"} ${
                    styles.btnStyle
                  }`}
                  onClick={changeTheme}
                >
                  {darkMode ? "☀️" : "🌙"}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
