import { Button } from "@mui/material";

const ItemCount = ({stock , title, setShowButton, refreshQuantity, quantity}) =>{
    
    const addToCart = () => {
        if(quantity < stock){
        refreshQuantity(quantity => quantity + 1)
        }
    }
     const removeCart = () => {
        if(quantity !== 1){
        refreshQuantity(quantity => quantity - 1)
        }
     }

    return(
        <>
            <div className="btn-quantity">
                <Button id="bt--quantity" size="small" onClick={removeCart}> - </Button>
                <span>{quantity}</span>
                <Button id="bt--quantity" size="small" onClick={addToCart}> + </Button>
            </div>
            <div>
                <Button variant={"contained"} fullWidth id="colorBtnAddToCart" onClick={() => setShowButton(true)}>Add to cart</Button>
            </div>
        </>
        )
}

export default ItemCount 