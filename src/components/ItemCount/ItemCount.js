import { Button } from "@mui/material";

const ItemCount = ({stock , title, setShowButton, refreshQuantity, quantity}) =>{
    
    const addToCart = () => {
        if(quantity < stock){
        refreshQuantity(quantity + 1)
        }
    }
     const removeCart = () => {
        if(quantity !== 1){
        refreshQuantity(quantity => quantity - 1)
        }
     }

    //Para agregar visualizar productos cargados por el usuario en el console.log
     const onAddToCart = () => {
         console.log(`Haz agregado ${quantity} unidades del producto ${title} quedan en stock ${stock - quantity}`)
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