import axios from 'axios'
import { useState, useEffect, createContext } from 'react'


const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {


    //arreglo bacio
    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidasId, setBebidasId] = useState(null);
    const [receta, setReceta] = useState({});








    const consultarBebida = async datos => {



        try {

            const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria} `

            const { data } = await axios(URL)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }


    //funcion modal

    const handleModalClick = () => {
        setModal(!modal)
    }


    //funcion para mostrar detalle beida por id
    const handleBebidaidlClick = (id) => {
        setBebidasId(id)
    }


    useEffect(() => {

      

        const obtenerRecetas = async () => {
            if (!bebidasId) return

            try {
                const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidasId}`
                const { data } = await axios(URL)
                setReceta(data.drinks[0])

            } catch (error) {
                console.log(error)
 
                
            }
        }

        obtenerRecetas();
    }, [bebidasId]);

    return (
        //hacer disonoible mis bebidas
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaidlClick,
                receta,
                setReceta

            }}>

            {children}
        </BebidasContext.Provider>

    )

}



export {
    BebidasProvider,

}

export default BebidasContext