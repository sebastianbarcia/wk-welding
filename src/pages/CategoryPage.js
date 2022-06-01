import CardItemsListContainer from "../components/carditemListContainer/CardItemsListContainer"
import welderProducts from "../utils/welderProducts"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const CategoryPage = () =>{
    const [itemProduct, setWelders] = useState([]); 
    const {category} = useParams();  
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
             setTimeout(() => {
                resolve(welderProducts)
             }, )        
        })
    }
    
    useEffect (() => {
        setWelders([]);

        getProducts(welderProducts)
           
        .then((response) => {  
               
            // setWelders(response)
            filterByCategory(response)
        })
        .catch((error) =>{
            console.log("Error: fallo la llamada")
        })
        .finally(() =>{
            console.log("se termino la llamada")
        })
    }, [category])   

    const filterByCategory = (array) =>{
        return array.filter( (item) =>{
            if(item.category === category){
                let itemsCategory = [];
                itemsCategory.push(item);
                console.log([...itemsCategory])
                return setWelders([...itemsCategory, item])   
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