import { Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({stock}) =>{
    const [count, setCount] = useState(1)
   
    const addToCart = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }
    const removeCart = () => {
        if(count !== 1){
        setCount(count - 1)
        }
    }
    const onAddToCart = () => {
        console.log(count)
    }

    return(
        <>
            <div className="btn-quantity">
                <Button id="bt--quantity" size="small" onClick={removeCart}> - </Button>
                <span>{count}</span>
                <Button id="bt--quantity" size="small" onClick={addToCart}> + </Button>
            </div>
            <div>
                <Button variant={"contained"} fullWidth id="colorBtnAddToCart" onClick={onAddToCart} >Add to cart</Button>
            </div>
        </>
            )

}

export default ItemCount