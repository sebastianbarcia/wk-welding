import { Container,Grid } from '@mui/material'
import '../footer/footer.scss'
import ContactForm from '../inputsForm/contactForm'

const FooterNav = () =>{
    return(
    
        <Container maxWidth="xl">
            <Grid container  className='grid-container-footer'>           
                <Grid item md={4} xs={12} className='footerText'>
                    <ul>
                        <li>Productos</li>
                        <li>Nosotros</li>
                        <li>Telefono</li>
                        <li>wkwelding@wkwelding.es</li>
                    </ul>
                </Grid>        
                <Grid item md={6} xs={12}>
                    <ContactForm/>
                </Grid>
            </Grid>
        </Container>
    
    
    )
} 

export default FooterNav;