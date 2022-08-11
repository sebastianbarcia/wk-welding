import { Typography, CardActionArea, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import './CardItemList.scss';
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

//brings props of the product items to add
const CardItemList = ({image,title,price, stock, id}) => {
  //Get the add to cart function from the context
  const { addProductToCart } = useContext(CartContext);
  //Constant to set the amount to add
  const quantity = (1);
  
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
                € {price}
                </Typography>
            </div>            
            <div>
              <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={() => addProductToCart({ image, title, price, stock, id, quantity }) }>Comprar</Button> 
            </div>            
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    )
}

export default CardItemList