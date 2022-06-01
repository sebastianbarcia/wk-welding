import { useEffect,useState } from "react";
import  welderProducts  from "../../utils/welderProducts";
import { useParams, useNavigate } from "react-router-dom";

const CategoryListContainer = () => {
const {category} = useParams();
console.log(useParams())
const navigate = useNavigate();

    const [prodCategory, setCategory] = useState({})
    
    // const getItem = () =>{
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products)
    //         }, 2000)        
    //     })
    // }

    useEffect (() => {
        
        // getItem()

        // .then((response) => {      
        //    console.log(response)
        //    setProductSingle(response)
        // })
        // .catch((error) =>{
        //     console.log("Error: fallo la llamada")
        // })
        // .finally(() =>{
        //     console.log("se termino la llamada")
        // })
        console.log("producto filtrado", prodCategory)
        if(productsCategory === undefined){
            navigate('/NotFound')
        }else{
            setCategory(productsCategory)
        }
    }, [category])

    const productsCategory = welderProducts.filter((products) =>{
        console.log(category)
        console.log(products.category)
        return products.category == category;
    } )  
    console.log(productsCategory)
    
    return(
        <>
           <h1>hjkhk</h1> 
        </>
    )
}

export default CategoryListContainer