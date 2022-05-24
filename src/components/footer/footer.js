import { Container,Grid } from '@mui/material'

import '../footer/footer.scss'

import ContactsForms from '../inputsForm/contactForm.js'
const footer = [
{"title": "Productos", "link" : "#", "id":1}, 
{"title": "Nosotros", "link" : "#" , "id":2}, 
{"title":  "Telefono", "link" : "#", "id":3}, 
{"title": "wkwelding@wkwelding.es" , "link" : "https://outlook.live.com/owa/", "id": 4 }]

const FooterNav = () =>{
    return(    
        <Container maxWidth="xl">
            <Grid container  className='grid-container-footer'>           
                <Grid item md={4} xs={12} className='footerText'>
                    <ul>
                        {footer.map((navFooter) =>{ 
                            return(
                        <li key={navFooter.id}><a href={navFooter.link}>{navFooter.title}</a></li>
                            )
                        })
                        }
                    </ul>
                </Grid>        
                <Grid item md={6} xs={12}>
                    <ContactsForms/>
                </Grid>
            </Grid>
        </Container>   
    )
} 

export default FooterNav;