//Funcion para obtener los datos del Storage
export const getDataFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
}

//Funcion para almacenar los datos en el Storage
export const setDataInStorage = (data) => {
    localStorage.setItem("favs",JSON.stringify(data))
}
