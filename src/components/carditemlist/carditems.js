import './carditems.scss'
import CardItem from '../card/card'
import { Container,Grid } from "@mui/material"


const CardSecuency = ({titleSubSection}) => {
    return(
        <Container maxWidth="xl" className='content-series'>
            <Grid container>
                <h2>{titleSubSection}</h2>
            </Grid>
            <Grid container columns={14} spacing={2} className='content-container-cards'>
                <Grid item xl={3} className='cards-margin'>
                    <CardItem title={"SWK 200"} price={`€ ${324}`} image={'swk_200-img1.jpg'} />
                </Grid>
                <Grid item xl={3} className='cards-margin'>
                    <CardItem title={"TWK 200"} price={`€ ${428}`} image={'twk-200-imagen2.jpg'} />
                </Grid>
                <Grid item xl={3} className='cards-margin'>
                    <CardItem title={"VEKTOR R60"} price={`€ ${100}`} image={'vektor_r60-img1.jpg'} />
                </Grid>
                <Grid item xl={3} className='cards-margin'>
                    <CardItem title={"WT-26"} price={`€ ${200}`} image={'WT26-WK.jpg'}/>
                </Grid>           
            </Grid>
        </Container>
    )
}

export default CardSecuency