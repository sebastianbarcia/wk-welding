import  '../itemDetail/itemDetail.scss'
import { Button, Container , Grid } from '@mui/material'
import ItemCard from '../CardItem/CardItem'
import Colors from '../colors/colors'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 

const ItemDetail = ({product}) => {
    
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
                            <ItemCard stock={product.stock} title={product.title}/> 
                        </div>                                                                                    
                    </Grid>
                </Grid>
            </Container>         
        </>
    )
}

export default ItemDetail