import { useEffect,useState } from "react";
import ItemDetail from "../itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { CircularProgress } from "@mui/material";

const ItemDetailContainer = () => {
//Hook useParams to set the id of the url
const {id} = useParams();

//Hook State to run spinner/load on wait
const [load, setLoad] = useState(false);

//Hook State to set the product load
const [productSingle, setProductSingle] = useState({});

/*Called the back end to request the product with the id of the useParams
and set the time and loaded.*/ 
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
        }, 1250)  
   }, [id])
   
      if(load && (productSingle.id === undefined)){
         return (
             <>
                 <div className='spinner-styles'>
                     <CircularProgress color="warning" /> 
                 </div>
             </>
         )
     }else if (productSingle.id !== undefined){
    return(
        <>
            <ItemDetail product = {productSingle} />
        </>
    )
}}

export default ItemDetailContainer