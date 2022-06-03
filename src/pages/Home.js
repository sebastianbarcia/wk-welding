import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import welderProducts from '../utils/welderProducts';
import { useState, useEffect } from 'react';
import { Container, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { homeText } from '../utils/helper';

const Home = () => {
    const [itemProduct, setWelders] = useState([]) 
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(welderProducts)
            }, 2000)        
        })
    }

    const filterNovedad = itemProduct.filter(element => element.news === true)   
         
    useEffect (() => {
        
        getProducts()
        
        .then((response) => {      
            setWelders(response)
           
        })
        .catch((error) =>{
            console.log("Error: fallo la llamada")
        })
        .finally(() =>{
            console.log("se termino la llamada")
        })
    }, [])
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

export default Home