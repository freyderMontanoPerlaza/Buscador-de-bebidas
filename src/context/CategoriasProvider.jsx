import axios from 'axios'
import { useState, useEffect, createContext } from 'react'


const CategoriasContext = createContext()

const CategoriasProvider = ({ children }) => {
    //arreglo vacio para pasar mis categorias
    const [categorias, setCategorias] = useState([]);








    //logica
    //llamado hacia la api
    const obtnerCategorias = async () => {

        try {

            const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list `
            const { data } = await axios(URL)
            setCategorias(data.drinks)

        } catch (error) {
            console.log(error)

        }
    }

    //ejecutar api una sola vez
    useEffect(() => {
        obtnerCategorias();
    }, []);







    return (
        //hacer disonoible mis categorias
        <CategoriasContext.Provider value={{categorias }}>

            {children}
        </CategoriasContext.Provider>

    )
}

export {
    CategoriasProvider
}

export default CategoriasContext