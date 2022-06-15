import CardItemsListContainer from "../components/carditemListContainer/CardItemsListContainer"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const CategoryPage = () =>{
    const [itemProduct, setWelders] = useState([]); 
    const {category} = useParams();  
    
    useEffect (() => {
        
        setWelders([]);
        
        getWelderProducts()
        .then((response) => {
            //*  
            setWelders([]);
            //*
            filterByCategory(response)           
        })

        .catch((error) =>{
            console.log("Error: fallo la llamada")
        })

        .finally(() =>{
            console.log("se termino la llamada")
        })

    }, [category])   

    const getWelderProducts = async () =>{
        const productSnapshot = await getDocs(collection(db, "welderProducts"));
        const productList = productSnapshot.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
 
    const filterByCategory = (array) =>{
        return array.map( (item) =>{
            if(item.category === category){        
             return setWelders(itemProduct => [...itemProduct, item]);   
            }
        })
    }

    return(
        <div>            
             <CardItemsListContainer titleSubSection={category} products={itemProduct}/>
        </div>
    )
}

export default CategoryPage