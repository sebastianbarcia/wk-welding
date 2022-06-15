import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import { useState, useEffect } from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { homeText } from '../utils/helper';
import CircularProgress from '@mui/material/CircularProgress';
import './home.scss';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
    const [load, setLoad] = useState(false) 
    const [itemProduct, setWelders] = useState([]) 

    useEffect (() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false);
        getWelderProducts()

        .then((response) => {
               setWelders(response) 
            })
            
        }, 1500)        
        
    }, [])   

    const getWelderProducts = async () =>{
       
        const productSnapshot = await getDocs(collection(db, "welderProducts"));
        const productList = productSnapshot.docs.map((doc) =>{
            
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
    
    const filterNovedad = itemProduct.filter(element => element.news === true)   
         
    if(load){
        return (
            <>
            <div className='spinner-styles'>
                <CircularProgress color="warning" /> 
            </div>
           
            </>
        )
    }else{
    return(
        <>
            <CardItemsListContainer titleSubSection="Productos recomendados" products={filterNovedad}  />
            <Grid container className='justify-content-home' id="col-direction-home" spacing={5} >
                <Grid item md={5} xs={10}>
                    {homeText.map(({title , paragraph}) => {
                        return(
                        <>
                            <h3>{title}</h3>
                            <p>{paragraph}</p>
                        </>
                        )
                    })}
                    <Button variant={"outlined"} id="outlined-color-bottom"><Link to={`/product`} >Ver nuestros productos</Link></Button>
                </Grid>
                <Grid item md={4.9} xs={10}>
                    <img src='../wkwelding-inicio-quienes-somos-2021.jpg'></img>
                </Grid>
            </Grid>
           
        </>
    )
}
}
export default Home