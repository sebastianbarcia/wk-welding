import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import './ItemCount.scss'
 
//Component to add and subtract quantities in ItemDetail
const ItemCount = ({stock , refreshQuantity, quantity}) =>{
    
    //Add product   
    const addToCart = () => {
        if(quantity < stock){
        refreshQuantity(quantity => quantity + 1)
        }
    }
    //Subtract product
     const removeCart = () => {
        if(quantity !== 1){
        refreshQuantity(quantity => quantity - 1)
        }
     }

    return(
        <>
            <div className="btn-quantity">
                <Fab size="small"  aria-label="rest" id="bt--quantity" onClick={removeCart}>
                    <RemoveIcon/>
                </Fab>
                <span id='quant-itemCount' >{quantity}</span>
                <Fab size="small" aria-label="rest" id="bt--quantity" onClick={addToCart}>
                    <AddIcon/>
                </Fab>
            </div>
        </>
        )
}

export default ItemCount 