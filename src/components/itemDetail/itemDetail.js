import  '../itemDetail/itemDetail.scss'
import { Button, Container , Grid } from '@mui/material'
import ItemCount  from '../ItemCount/ItemCount'
import Colors from '../colors/colors'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 
import { Link } from 'react-router-dom';
import { useState , useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({product}) => {
 
    const { addProductToCart } = useContext(CartContext)
    const [showButton, setShowButton] = useState(false)
    const [quantity, setQuantity] = useState(1)

    
    // const addToProductToCart = () =>{
    //     console.log("producto agregado al carrito", product)
    //     console.log("cantidad añadida", quantity ) 
    // }
    
    const {price, title , id , image , stock} = product;
    
    return(
        <>
            <Container maxWidth="xl" className="single-product" key={product.id}> 
                <Grid className='category-item'>
                    <p>{product.category}</p>
                </Grid>
                <Grid container columns={16} spacing={2} alignItems={"center"} justifyContent={"center"} >
                    <Grid item lg={7} md={8}>
                        <img src={product.image}></img> 
                        <div className='img-secondary'>
                            <Button>
                            <ArrowBackIosIcon color='warning'/>
                            </Button>
                                <img src={product.image}></img>
                                <img src={product.image}></img> 
                                <img src={product.image}></img> 
                            <Button> 
                            <ArrowForwardIosIcon color='warning'/> 
                            </Button>                           
                        </div>                  
                    </Grid>
                    <Grid item lg={6} md={7}>     
                        <h2>{product.title}</h2>
                        <p>{product.description}</p> 
                        <h2> {`€ ${product.price}`}</h2>                        
                        <Colors />   
                        <div className='item-card-margin'>
                        {!showButton ?
                        <ItemCount quantity = { quantity } refreshQuantity = {setQuantity} setShowButton={setShowButton}  stock={product.stock} title={product.title}/>
                        : <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={() => addProductToCart({ image, title, price, stock, id, quantity }) }>Terminar compra</Button> }
                        </div> 
                                                                                                          
                    </Grid>
                </Grid>
            </Container>         
        </>
    )
}

export default ItemDetail