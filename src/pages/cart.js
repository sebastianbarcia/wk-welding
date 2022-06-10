import { Container , Grid , Button } from "@mui/material"
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


const Cart = () =>{
    let bringOrder = JSON.parse( localStorage.getItem("order"))   
    const { deleteItemCart , totalPrice } = useContext(CartContext)
    console.log(bringOrder.length)
    
    if(bringOrder.length == 0){
        return(
            <>
                <Container maxWidth="xl" className="cart-empty-title">
                    <h2>No hay productos en tu carrito</h2>
                    <p>Mira en nuestras secciones</p>
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
        <Container Container>  
            <div>
                <h2>Carrito</h2>
            </div>
            <Grid container gap={6} spacing={9}>
                <Grid item xs={12} md={7} > 
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
                                            <ListItemText primary={item.title} secondary={item.price} />
                                            <div>
                                                <p>{item.quantity}</p>
                                            </div>
                                        <Tooltip title="Delete">
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
            
            <Grid item xs={12} md={4} className="cart-acount-items">
                <List component="nav" aria-label="mailbox folders">
                    <ListItem >
                        <ListItemText primary="Subtotal"/> <p>€ {totalPrice.toFixed(2)}</p>
                    </ListItem>
                    <Divider />
                    <ListItem  divider>
                        <ListItemText primary="Gastos de envios" /><p>€ {(totalPrice * 0.1).toFixed(2)}</p>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Precio total"/><h3>€ {totalPrice.toFixed(2)}</h3>
                    </ListItem>
                    <Button fullWidth variant ="contained" id="colorBtnAddToCart">Completar compra</Button>
                    <Button fullWidth variant ="outlined" color="warning">Continuar comprando</Button>
                </List>
            </Grid>
        </Grid>
      </Container>
      </>
    )
    }
}
export default Cart