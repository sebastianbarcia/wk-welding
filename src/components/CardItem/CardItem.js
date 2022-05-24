import { Button } from "@mui/material";
import { useState } from "react";

const ItemCard = ({stock , title}) =>{
    const [prev, setCount] = useState(1)
   
    const addToCart = () => {
        if(prev < stock){
        setCount(prev => prev + 1)
        }
    }
    const removeCart = () => {
        if(prev !== 1){
        setCount(prev => prev - 1)
        }
    }
    const onAddToCart = () => {
        console.log(`Haz agregado ${prev} unidades del producto ${title} quedan en stock ${stock - prev}`)
    }

    return(
        <>
            <div className="btn-quantity">
                <Button id="bt--quantity" size="small" onClick={removeCart}> - </Button>
                <span>{prev}</span>
                <Button id="bt--quantity" size="small" onClick={addToCart}> + </Button>
            </div>
            <div>
                <Button variant={"contained"} fullWidth id="colorBtnAddToCart" onClick={onAddToCart} >Add to cart</Button>
            </div>
        </>
            )

}

export default ItemCard