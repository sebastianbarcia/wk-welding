import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const AllProducts = () => {
    const [itemProduct, setWelders] = useState([]) 

    useEffect (() => {
        
        getWelderProducts()
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

    const getWelderProducts = async () =>{
        const productSnapshot = await getDocs(collection(db, "welderProducts"));
        const productList = productSnapshot.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    return(
        <>
            <CardItemsListContainer titleSubSection="Nuestros productos" products={itemProduct}/>
        </>
    )
}

export default AllProducts