import  '../itemDetail/itemDetail.scss'
import { Button, Container , Grid } from '@mui/material'
import ItemCount  from '../ItemCount/ItemCount'
import Colors from '../colors/colors'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({product}) => {
    const [showButton, setShowButton] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const addToProductToCart = () =>{
        console.log("producto agregado al carrito", product)
        console.log("cantidad añadida", quantity ) 
    }

    return(
        <>
            <Container maxWidth="xl" className="single-product"> 
                <Grid className='category-item' >
                    <p>{product.category}</p>
                </Grid>
                <Grid container columns={16} spacing={2} alignItems={"center"} justifyContent={"center"}  >
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
                    <Grid item lg={6}  md={7}>     
                        <h2>{product.title}</h2>
                        <p>{product.description}</p> 
                        <h2> {`€ ${product.price}`}</h2>                        
                        <Colors />   
                        <div className='item-card-margin'>
                        {!showButton ?
                            <ItemCount stock={product.stock} title={product.title} setShowButton={setShowButton} refreshQuantity = {setQuantity} quantity = {quantity} /> 
                            : <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={addToProductToCart}><Link to="/cart" className='link-button-style'>Terminar compra</Link></Button> }
                            
                        </div> 
                                                                                                          
                    </Grid>
                </Grid>
            </Container>         
        </>
    )
}

export default ItemDetail