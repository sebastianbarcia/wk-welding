import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import welderProducts from '../utils/welderProducts';
import { useState, useEffect } from 'react';

const Home = () => {
    const [itemProduct, setWelders] = useState([]) 
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(welderProducts)
            }, 2000)        
        })
    }

    useEffect (() => {
        
        getProducts()

        .then((response) => {      
            setWelders(response)
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
            <CardItemsListContainer titleSubSection="Productos recomendados" products={itemProduct}/>
            <CardItemsListContainer titleSubSection="Productos más vendidos" products={itemProduct}/>
        </>
    )
}

export default Home