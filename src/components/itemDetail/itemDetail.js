import  '../itemDetail/itemDetail.scss';
import { Button, Container , Grid , Typography } from '@mui/material';
import ItemCount  from '../ItemCount/ItemCount';
import Colors from '../colors/colors';
import { Link } from 'react-router-dom';
import { useState , useContext , useEffect } from "react";
import CartContext from "../../context/CartContext";
import { getDocs } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import db from '../../utils/firebaseConfig';

const ItemDetail = ({product}) => {

    //Get the add to cart function from the context
    const { addProductToCart } = useContext(CartContext);

    //Hook to show buttons when adding to cart
    const [showButton, setShowButton] = useState(false);

    //Hook to set quantity of each product to add to cart
    const [quantity, setQuantity] = useState(1);

    //To set switch and add additional
    const [torch, setTorch] = useState(false);

    //Destructuring of the product items to be added to the cart
    const {price, title , id , image , stock} = product;
    
    //Product loading hook
    const [itemProduct, setWelders] = useState([]);
    
    //Defines product that can be added as an additional. in this case WT-26.
    const torchAddWelder = itemProduct.find((item) => item.id === "NpGXNreCrzwk3iAvSlli");
    
    //Hook to select images
    const [photoSelect, setPhotoSelect] = useState();

    //Selection of secondary images of the product
    const handleClickImage1 = () => {
        setPhotoSelect(
          product.image
        );
      };
      const handleClickImage2 = () => {
        setPhotoSelect(
          product.image2
        );
      };
      const handleClickImage3 = () => {
        setPhotoSelect(
          product.image3
        );
      };
     

    useEffect (() => {
        //Load products from backend - firebase
        getWelderProducts()
        .then((response) => {
            setWelders(response)     
        })
        //Image selected when loading the site
        setPhotoSelect(
            product.image
          );

    }, [])   

    //Function to bring the products from firebase
    const getWelderProducts = async () =>{
        const productSnapshot = await getDocs(collection(db, "welderProducts"));
        const productList = productSnapshot.docs.map((doc) =>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
    
    //Add products to cart
    const ClickDetailItem = () => {
        
        addProductToCart({ image, title, price, stock, id, quantity });

        //Show buttons if i add to cart
        setShowButton(true);

        //If the switch is activated add additional product
        if(torch){  
            addProductToCart({ image: torchAddWelder.image , title : torchAddWelder.title, price: torchAddWelder.price , stock: torchAddWelder.stock, id: torchAddWelder.id, quantity })
        }
    }
    
    //Activate and deactivate switch
    const handleTorch = () =>{
         setTorch(!torch);    
    }
    
    return(
        <>
            <Container maxWidth="xl" className="single-product" key={product.id}> 
                <Grid className='category-item'>
                    <p>{product.category}</p>
                </Grid>
                <Grid container columns={16} spacing={2} alignItems={"center"} justifyContent={"center"} >
                    <Grid item lg={7} md={8} xs={12}>
                        <img src={photoSelect}></img> 
                        <div className='img-secondary' id='img-secondary-media'>
                            {(product.category === "Soldadoras" || product.title === "WT-18") &&
                                <>
                                    <img onClick={handleClickImage1} src={product.image}></img>
                                    <img onClick={handleClickImage2} src={product.image2}></img> 
                                    <img onClick={handleClickImage3} src={product.image3}></img> 
                                </>
                            }                            
                            {(product.title === "WT-17" || product.title === "WT-26" || product.category === "Consumibles") && 
                                <>
                                    <img onClick={handleClickImage1} src={product.image}></img>
                                    <img onClick={handleClickImage2} src={product.image2}></img> 
                                </>
                            }                 
                        </div>                  
                    </Grid>
                    <Grid item lg={6} md={7} >     
                        <h2>{product.title}</h2>
                        <Typography variant="body1" >{product.description}</Typography>
                        <h2>€ {`${product.price}`}</h2> 
                        {product.category === "Soldadoras" ? <> <Colors event = {handleTorch}  />  {!torch ? <Typography>Sin antorcha</Typography> : <Typography>Con antorcha WT-26</Typography>} </> : " " }                          
                        <div className='item-card-margin'>                         
                            <ItemCount quantity = { quantity } refreshQuantity = {setQuantity}  stock={product.stock} title={product.title}/>
                            <Button className='btn-margin-detail' fullWidth variant ="contained" id="colorBtnAddToCart" onClick={() => ClickDetailItem()}>Añadir al carrito</Button> 
                            <Grid container spacing={2} >  
                                {showButton && <><Grid item  xs={6}> <Button fullWidth variant ="outlined" color="warning" > <Link to={'/cart'} id={"btn-detail"}>Terminar compra</Link></Button></Grid> <Grid item xs={6}><Button fullWidth   variant ="outlined" color="warning"> <Link id={"btn-detail"} to={'/'}>Seguir comprando</Link></Button></Grid></>}
                            </Grid>
                        </div>                                                                                                          
                    </Grid>
                </Grid>
            </Container>         
        </>
    )
}

export default ItemDetail