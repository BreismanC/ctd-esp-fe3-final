import { createContext, useEffect, useMemo, useReducer } from "react";
//import { actions, initialState, reducer } from "./reducer.service";

export const initialState = { theme: "light", data: [] };

export const actions = {
    themeLight: "setLight",
    setThemeDark: "setDark",
    setData: "setData"
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.setData:{
            return ({...state, data: action.payload})}
        case actions.setThemeDark:
            return ({...state, theme: "dark"})
        case actions.themeLight:
            return  ({...state, theme: "light"})
        default: {
            return state}
    }
}


export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const providerState = useMemo(()=>({
    data: state.data,
    theme: state.theme,
    setData: (item) =>{
      dispatch({type: actions.setData, payload: item})
    },
    setThemeDark: ()=>{
      dispatch({type: actions.setThemeDark})
    },
    setThemeLight: ()=>{
      dispatch({type: actions.themeLight})
    }
  }), [state, dispatch])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => providerState.setData(data) );
  }, [providerState]);

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};