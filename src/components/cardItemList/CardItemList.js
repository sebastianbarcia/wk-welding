import { Typography, CardActionArea, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import ItemCount from '../ItemCount/ItemCount';
import './CardItemList.scss';
import { Link } from "react-router-dom";
import { useState , useContext } from "react";
import CartContext from "../../context/CartContext";

const CardItemList = ({image,title,price, stock, id}) => {
  const { addProductToCart } = useContext(CartContext)
  const [showButton, setShowButton] = useState(false)
  const [quantity, setQuantity] = useState(1);
  
  // const addToProductToCart = () =>{
  //       console.log("Haz agregado al carrito", quantity,  title, "quedan en stock", stock )
  //       console.log("cantidad añadida",  ) 
  //   }
 
    return(   
      <div className='visible'>     
        <Card sx={{ maxWidth: 300}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            width= "300"
            image={`/card/${image}`}
            alt="swk 200"
          />
          <Grid maxWidth="sx" className="justify-content-center">
          <Button variant={"default"} fullWidth>
            <Link to={`/product/${id}`}>Ver detalle</Link> 
          </Button>
          </Grid>
          <CardContent className="area-grid">
            <div>
                <Typography gutterBottom variant="h6" component="div">
                {title}
                </Typography>
                <Typography variant={"subtitle1"} color="text.secondary">
                {price}
                </Typography>
            </div>            
            <div>
            {!showButton ?
              <ItemCount quantity = {quantity} refreshQuantity = {setQuantity} setShowButton={setShowButton}  stock={stock} title={title}/>
              : <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={() => addProductToCart({ image, title, price, stock, id, quantity }) }>Terminar compra</Button> }
            </div>            
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    )
}

export default CardItemList