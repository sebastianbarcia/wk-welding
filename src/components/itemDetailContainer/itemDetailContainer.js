import { useEffect,useState } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import  welderProducts  from "../../utils/welderProducts";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
const {id} = useParams();
const navigate = useNavigate();

    const [productSingle, setProductSingle] = useState({})
    
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
        console.log("producto filtrado", productsSingle)
        if(productsSingle === undefined){
            navigate('/NotFound')
        }else{
            setProductSingle(productsSingle)
        }
    }, [id])

    const productsSingle = welderProducts.find( (product) =>{
        
        return product.id == id
    } )  
    
    return(
        <>
            <ItemDetail product = {productSingle} />
        </>
    )
}

export default ItemDetailContainer