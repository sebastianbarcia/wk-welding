import CardItemsListContainer from '../components/carditemListContainer/CardItemsListContainer';
import { useState, useEffect } from 'react';
import { Grid, Button , Typography } from '@mui/material';
import { Link , useNavigate} from 'react-router-dom';
import { homeText } from '../utils/helper';
import CircularProgress from '@mui/material/CircularProgress';
import './home.scss';
import db from '../utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Home = () => {
    //Spinner - load
    const [load, setLoad] = useState(true) 
    
    //To bring product items
    const [itemProduct, setWelders] = useState([])
    
    //Use Navigate to send the user to the welders category from the banner/front page
    const navigate = useNavigate();

    const btnCall = () =>{
        navigate('/category/Soldadoras');
    }
    //Called and loaded function with time setting to load page data
    useEffect (() => {
        setTimeout(() => {
            setLoad(false);
        getWelderProducts()

        .then((response) => {
               setWelders(response) 
            })
            
        }, 1250)        
        
    }, [])   

    //Call firebase to fetch product data in backend
    const getWelderProducts = async () =>{
       
        const productSnapshot = await getDocs(collection(db, "welderProducts"));
        const productList = productSnapshot.docs.map((doc) =>{
            
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }
    //Cover image
    const styleHomeFront ={
        backgroundImage: "url(./portada-wk.png)", 
    }

    //Filter the products that are going to be rendered as novelty in the home
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
            <div style={styleHomeFront} className='frontpage-home'  >
                <Typography variant='h2' component={"h3"}>Sube de nivel con la nueva linea de soldadoras</Typography>
                <img src='./soldadoras-category-list.png'></img>
                <Button variant='contained' color='warning' onClick={btnCall}>Descúbrelas</Button>
            </div>
            <Grid container className='justify-content-home' id="col-direction-home" spacing={5} >
                <Grid item md={5} xs={10}>
                    {homeText.map(({title , paragraph}) => {
                        return(
                        <>
                            <Typography variant="h4" gutterBottom component="div" id='color-home-subtitle'>{title}</Typography>
                            <Typography variant="body1" gutterBottom>{paragraph}</Typography>
                        </>
                        )
                    })}
                    <Button variant={"outlined"} id="outlined-color-bottom"><Link to={`/product`} >Ver nuestros productos</Link></Button>
                </Grid>
                <Grid item md={4.9} xs={10}>
                    <img src='../wkwelding-inicio-quienes-somos-2021.jpg'></img>
                </Grid>
            </Grid>


            <CardItemsListContainer titleSubSection="Productos recomendados" products={filterNovedad}  />
            
           
        </>
    )
}
}
export default Home