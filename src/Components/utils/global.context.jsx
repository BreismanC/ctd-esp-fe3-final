import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { getDataFromStorage, setDataInStorage } from "./localStorage";

export const initialState = { theme: "light", data: [] };
export const ContextGlobal = createContext(undefined);

export const actions = {
  themeLight: "setLight",
  setThemeDark: "setDark",
  setData: "setData",
  favs: "favs",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setData: {
      return { ...state, data: action.payload };
    }
    case actions.setThemeDark:
      return { ...state, theme: "dark" };
    case actions.themeLight:
      return { ...state, theme: "light" };
    default: {
      return state;
    }
  }
};

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(getDataFromStorage);
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(
    () => ({
      data: state.data,
      theme: state.theme,
      setData: (item) => {
        dispatch({ type: actions.setData, payload: item });
      },
      setThemeDark: () => {
        dispatch({ type: actions.setThemeDark });
      },
      setThemeLight: () => {
        dispatch({ type: actions.themeLight });
      },
    }),
    [state, dispatch]
  );

  //Obtención de los datos de la Api JSONPLACEHOLDER
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => providerState.setData(data));
  }, [providerState]);

  // useEffect(() => {
  //   setDataInStorage(favs);
  // }, [favs]);

  //Funcion para compartir en el contexto global que me permite modificar los datos del localStorage
  const changeFavs = (element) => {
    //Comprobar si el elemento existe en el localStorage, si este es el caso, eliminarlo, sino agregarlo
    const data = getDataFromStorage();
    const busqueda = data.findIndex((item) => item.id === element.id);
    if (busqueda !== -1) {
      data.splice(busqueda, 1);
      setFavs(data);
    } else {
      setFavs([...data, element]);
    }
  };

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};
