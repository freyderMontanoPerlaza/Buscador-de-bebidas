import axios from 'axios'
import { useState, useEffect, createContext } from 'react'


const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {





    const consultarBebida = async datos => {



        try {

            const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria} `


            const { data } = await axios(URL)
            console.log(data)





        } catch (error) {
            console.log(error)
        }
    }









    return (
        //hacer disonoible mis bebidas
        <BebidasContext.Provider
            value={{
                consultarBebida
            }}>

            {children}
        </BebidasContext.Provider>

    )

}



export {
    BebidasProvider
}

export default BebidasContext