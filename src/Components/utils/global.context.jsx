import { useEffect, useState } from "react";
import { createContext } from "react";
import { getDataFromStorage, setDataInStorage } from './localStorage';

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataApi, setDataApi] = useState([]);
  const [favs, setFavs] = useState(getDataFromStorage);

  //Obtención de los datos de la Api JSONPLACEHOLDER
  useEffect(() => {
    async function getDataWithFetch() {
      try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setDataApi(data);
      return data;
      } catch (e) {
        console.error(e);
      }
    };
    getDataWithFetch();
  }, []);

  //Cambio de los datos en el LocalStorage
  useEffect(() => {
    setDataInStorage(favs);
  }, [favs]);

  //Funcion para compartir en el contexto global que me permite modificar los datos del localStorage
  const changeFavs = (element) => {
    //Comprobar si el elemento existe en el localStorage, si este es el caso, eliminarlo, sino agregarlo
    const data = getDataFromStorage();
    const busqueda = data.findIndex(item => item.id === element.id);
    if (busqueda !== -1) {
      data.splice(busqueda, 1)
      setFavs(data)
    } else {
      setFavs([...data, element])
    }
  };

  return (
    <ContextGlobal.Provider
      value={{
        dataApi,
        favs,
        changeFavs,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
