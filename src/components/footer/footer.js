import { Button, Container,Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import '../footer/footer.scss'
import { footer } from '../../utils/navBarOptions'


//Elements are brought from "../../utils/navBarOptions" to render them in the footer

const FooterNav = () =>{
    return(    
        <Container fixed>
            <Grid container  className='grid-container-footer'>           
                <Grid item md={4} xs={12} >
                    <Link to='/' className='contenedorLogo'>
                        <img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' />
                    </Link>
                    <h3>WK WELDING S.L.</h3>
                </Grid>        
                <Grid item md={4} xs={12} className='footerText'>
                <ul>
                    {footer.map((navFooter) =>{ 
                        return(
                        <li key={navFooter.id}><Link to={navFooter.link}>{navFooter.title}</Link></li>
                            )
                        })
                    }
                    </ul>
                </Grid>
                <Grid item md={4} xs={12}>
                    <p>Descargar catalogo de productos</p>
                    <Button variant={"contained"} id = "colorBtnAddToCart" href='wk-2020.pdf' target="_blank">Catalogo</Button>
                </Grid>
            </Grid>
        </Container>   
    )
} 

export default FooterNav;