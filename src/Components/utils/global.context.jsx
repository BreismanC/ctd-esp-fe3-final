import { createContext, useEffect, useMemo, useReducer } from "react";

//Definicion del contexto y el estado inicial del useReducer
export const initialState = { theme: "light", data: [] };
export const ContextGlobal = createContext(undefined);

//Posibles acciones que permite el useReducer
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

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};
