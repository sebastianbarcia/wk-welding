import welderProducts from '../../helpers'
import { useState , useEffect } from 'react'
import CardItemsListContainer from '../carditemListContainer/CardItemsListContainer'

const CardContainer = () => {

const [welder, setSoldadoras] = useState([]) 
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(welderProducts)
            }, 2000)        
        })
    }

    useEffect ( () => {

        getProducts()

        .then((response) => {      
            setSoldadoras(response)
        })
        .catch((error) =>{
            console.log("Error: fallo la llamada")
        })
        .finally(() =>{
            console.log("se termino la llamada")
        })
    }, [])


    return(
        <>
            <CardItemsListContainer titleSubSection="Productos recomendados" welder = {welder} />
            <CardItemsListContainer titleSubSection="Productos más vendidos" welder = {welder}/>
        </>
    )
}

export default CardContainer