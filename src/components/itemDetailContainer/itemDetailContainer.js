import { useEffect,useState } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {
const {id} = useParams();
const [load, setLoad] = useState(false) 
const [productSingle, setProductSingle] = useState({});
  
    const getWelderProducts = async() =>{
        const docRef = doc(db, "welderProducts", id);
        const docSnaptshop = await getDoc(docRef);
        let product = docSnaptshop.data();
        product.id = docSnaptshop.id;
        return product;   
    } 
    useEffect (() => {
        setLoad(true);            
        setTimeout(() => {
           setLoad(false);
        getWelderProducts()        
        .then((response) => {  
            setProductSingle(response);  
            })
        }, 1500)  
   }, [id])

      if(load){
         return (
             <>
                 <div className='spinner-styles'>
                     <CircularProgress color="warning" /> 
                 </div>
             </>
         )
     }else{
    return(
        <>
            <ItemDetail product = {productSingle} />
        </>
    )
}
}

export default ItemDetailContainer