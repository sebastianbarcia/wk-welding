import { Button, Container,Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import '../footer/footer.scss'

const footer = [
{"title": "Productos", "link" : "/", "id":1}, 
{"title": "Nosotros", "link" : "/us" , "id":2},
{"title": "Contacto", "link" : "/contact" , "id":3}, 
{"title": "Correo: wkwelding@wkwelding.es" , "link" : "https://outlook.live.com/owa/", "id": 4 },
]

const FooterNav = () =>{
    return(    
        <Container fixed>
            <Grid container  className='grid-container-footer'>           
                <Grid item md={4} xs={12} >
                    <Link to='/' className='contenedorLogo'>
                        <img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' />
                    </Link>
                    <h3>WK WELDING</h3>
                </Grid>        
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
                <Grid item md={4} xs={12}>
                    <p>Descargar catalogo de productos</p>
                    <Button variant={"contained"} id = "colorBtnAddToCart">Catalogo</Button>
                </Grid>
            </Grid>
        </Container>   
    )
} 

export default FooterNav;