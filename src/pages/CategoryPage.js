import CardItemsListContainer from "../components/carditemListContainer/CardItemsListContainer"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CategoryPage = () =>{
    //Call matched with the category via useParams
    const [itemProduct, setWelders] = useState([]); 
    const {category} = useParams(); 
    const navigate = useNavigate(); 
    
    useEffect (() => {
          
        getWelderProducts()
        .then((response) => {
            const catResp = response.map(itemx  => itemx.category) 
            
            if(catResp.includes(category) === true){
            setWelders([]);
            filterByCategory(response)
            }
            else if(catResp.includes(category) === false){
                navigate('/*')
            }           
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