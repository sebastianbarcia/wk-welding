import { Container , Grid , Button, Typography } from "@mui/material"
import { useContext } from "react";
import CartContext from "../context/CartContext";
import Divider from '@mui/material/Divider';
import './cart.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";
import navBarOptions from "../utils/navBarOptions";
import { useNavigate } from "react-router-dom";

//Content from "../utils/navBarOptions"
const Cart = () =>{
    //Constant to fetch data previously saved in the localStorage
    let bringOrder = JSON.parse( localStorage.getItem("order"))
    let bringPrice = JSON.parse(localStorage.getItem("account")) 

    //Context brought with function to delete item
    const { deleteItemCart } = useContext(CartContext)
    
    //Price calculation + shipping and total
    const totalDelivery = bringPrice * 0.03; 
    const totalPriceWithDelivery = totalDelivery + bringPrice;
    
    const navigate = useNavigate();
    //Function to send to the next step of the purchase through hook useNavigate
    const btnFinishBuy = () =>{
        navigate('/order')
    }
    //Function to send the user to the index if he wants to continue buying
    const alreadyBuy = () =>{
        navigate('/')
    }
    
    /*If the local storage is empty, a page with an empty cart is shown, in case it has
    cart items the cart is rendered with its items*/ 
    if(bringOrder.length == 0){
        return(
            <>
                <Container maxWidth="xl" className="cart-empty-title">
                    <Typography variant="h4">No hay productos en tu carrito</Typography>
                    <Typography variant="subtitle1">Mira en nuestras secciones</Typography>
                </Container>
                <Container maxWidth="lg">
                    <Grid container className="cart-empty-items" >
                    {navBarOptions.map((optionProducts) => {                                                                         
                        return(
                        <Grid item className="button-items" lg={4}  md={6}  xs={12}>
                            <Link to = {`/category/${optionProducts.category}`} id="no-link-underline" >
                                <Button variant="contained"  id = "colorBtnAddToCart" className="width-button-cart" size="large">
                                    <p>{optionProducts.category}</p> 
                                </Button>
                            </Link> 
                        </Grid>
                            )
                        }) }
                    </Grid>
                </Container>
            </>
        )
    }else{

    return(
        <>
        <Container container id="margin-cart-account" maxWidth={"xl"}>  
            <div id="title-cart-account">
                <h2>Carrito</h2>
            </div>
            <Grid container gap={6} spacing={9} id={"media-items-acounts"}>
                <Grid item xs={12} md={7} id="cart-grid-account"> 
                    <List className="cart-list-products">
                        {bringOrder.map((item) => {
                            return (
                                <>
                                    <ListItem  key={item.id}>
                                        <ListItemAvatar>
                                            <Avatar  variant="rounded">
                                                <img src={item.image} />           
                                            </Avatar>
                                        </ListItemAvatar>
                                            <ListItemText primary={item.title} secondary={`€ ${item.price}`} />
                                            <div>
                                                <p>{item.quantity}</p>
                                            </div>
                                        <Tooltip title="Eliminar">
                                            <IconButton onClick={() => deleteItemCart( item.id )}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                        
                                    </ListItem>
                                <Divider variant="inset" component="li" />
                             </>
                            )                            
                            }
                        )
                    }
                </List>
            </Grid>            
            <Grid item xs={12} md={4} className="cart-acount-items" id={"media-acount-cart"}>
                <List component="nav" aria-label="mailbox folders">
                    <ListItem >
                        <ListItemText primary="Subtotal"/> <p>€ {bringPrice.toFixed(2)}</p>
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                        <ListItemText primary="Gastos de envios" /><p>€ {totalDelivery.toFixed(2)}</p>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Precio total"/><h3>€ {totalPriceWithDelivery.toFixed(2)}</h3>
                    </ListItem>
                    <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={btnFinishBuy}>Completar compra</Button>
                    <Button fullWidth variant ="outlined" color="warning" onClick={alreadyBuy}>Continuar comprando</Button>
                </List>
            </Grid>
        </Grid>
      </Container>
      </>
    )
    }
}
export default Cart