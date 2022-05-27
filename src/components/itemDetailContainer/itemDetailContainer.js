import { useEffect,useState } from "react"
import ItemDetail from "../itemDetail/itemDetail"
import { products } from "../../utils/welderProducts"

const ItemDetailContainer = () => {
const [productSingle, setProductSingle] = useState({})
    
    const getItem = () =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)        
        })
    }

    useEffect (() => {

        getItem()

        .then((response) => {      
           console.log(response)
           setProductSingle(response)
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
            <ItemDetail product = {productSingle} />
        </>
    )
}

export default ItemDetailContainer