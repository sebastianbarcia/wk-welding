import { Container,Grid } from '@mui/material'
import '../footer/Footer.scss'
import ContactForm from '../inputsForm/ContactForm'

const footer = [
{"title": "Productos", "link" : "#"}, 
{"title": "Nosotros", "link" : "#"}, 
{"title":  "Telefono", "link" : "#" }, 
{"title": "wkwelding@wkwelding.es" , "link" : "https://outlook.live.com/owa/"}]

const FooterNav = () =>{
    return(    
        <Container maxWidth="xl">
            <Grid container  className='grid-container-footer'>           
                <Grid item md={4} xs={12} className='footerText'>
                    <ul>
                        {footer.map((navFooter) =>{ 
                            return(
                        <li><a href={navFooter.link}>{navFooter.title}</a></li>
                            )
                        })
                        }
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