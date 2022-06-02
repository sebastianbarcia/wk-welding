import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import welderProducts from '../utils/welderProducts';
import { useState, useEffect } from 'react';

const AllProducts = () => {
    const [itemProduct, setWelders] = useState([]) 

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(welderProducts)
            },)        
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
            <CardItemsListContainer titleSubSection="Nuestros productos" products={itemProduct}/>
        </>
    )
}

export default AllProducts