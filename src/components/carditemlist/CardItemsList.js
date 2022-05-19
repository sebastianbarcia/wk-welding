import './CardItemsList.scss'
import CardItem from '../card/Card'
import { Container,Grid } from "@mui/material"
import soldadoras from '../../helpers'


const CardSecuency = ({titleSubSection}) => {  
     
    return(
        <Container maxWidth="xl" className='content-series'>
            <Grid container>
                <h2>{titleSubSection}</h2>
            </Grid>
            <Grid container columns={14} spacing={2} className='content-container-cards'>
            {soldadoras.map((soldiers) => {
                return(
                <Grid item xl={3} className='cards-margin'>
                    <CardItem key={soldiers.id} title={soldiers.title} price={`€ ${soldiers.price}`} image={soldiers.image} />
                </Grid>
                )
                 })}                
            </Grid>
        </Container>
    )
}

export default CardSecuency