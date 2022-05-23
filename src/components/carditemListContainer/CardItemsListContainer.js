import './CardItemsListContainer.scss'
import CardItemList from '../cardItemList/CardItemList'
import { Container,Grid } from "@mui/material"



const CardItemsListContainer = ({titleSubSection , welder}) => {      
     
    return(
        <Container maxWidth="xl" className='content-series'>
            <Grid container>
                <h2>{titleSubSection}</h2>
            </Grid>
            <Grid container columns={14} spacing={2} className='content-container-cards'>
            {welder.map(({title, price, image, id , stock}) => {                
                return(
                <Grid item xl={3} className='cards-margin' key={id} >
                    <CardItemList  title={title} price={`€ ${price}`} image={image} stock={stock} />
                </Grid>
                    )
                })   
            }                
            </Grid>
        </Container>
    )
}

export default CardItemsListContainer