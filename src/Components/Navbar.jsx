import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal)
  const darkMode = theme === "dark" || false

  const changeTheme = () => {

    if (darkMode) setLightTheme()

    else setDarkTheme()
  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="favs">Favs</Link>
      <button className={`btn btn-${darkMode ? 'light' : 'dark'}`} onClick={changeTheme} >{darkMode ? "☀️" : "🌙"}</button>
    </nav>
  )
}

export default Navbar