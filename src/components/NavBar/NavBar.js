import './NavBar.scss';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cart from '../cart/Cart';

const themeWK = createTheme({
    palette:{
        primary:{
            main:'#fffff'
        },
        secondary:{
            main:'#6b6c6f'
        }
    }
})

const NavBar = () =>{
   return(
       <>         
        <ThemeProvider theme={themeWK}>   
            <AppBar position="static">               
                <Toolbar className='toolbar'>
                    <Container maxWidth="xl" className='pos-navBar'>
                        <Grid container wrap='wrap' >
                            <Grid item md={2} xs={12} className = 'pos-logo'>
                                <a className='contenedorLogo'>
                                    <img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' />
                                </a>
                            </Grid>
                            <Grid md={8} xs={12} className='center-navBar' >
                                <ul className='nav'>
                                    <li><a>Productos</a>
                                        <ul className='columnUl'>
                                            <li><a>Equipos de soldadura y corte</a>
                                                <ul>
                                                    <li><a>MMA</a></li>
                                                    <li><a>TIG</a></li>
                                                    <li><a>MIG-MAG</a></li>
                                                    <li><a>Arco sumergido</a></li>
                                                    <li><a>Equipos de plasma</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Antorchas</a>
                                                <ul>
                                                    <li><a>TIG</a></li>
                                                    <li><a>MIG-MAG</a></li>
                                                </ul>
                                            </li>
                                            <li><a>Automatización</a></li>
                                            <li><a>Equipo de protección</a></li>
                                            <li><a>Consumibles de soldadura</a></li>
                                            <li><a>Respaldo ceramico</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Nosotros</a></li>
                                    <li><a>Contacto</a></li>                
                                </ul>
                            </Grid>
                            <Grid item md={2} xs={12} className="org-btn">                                
                                <Cart/>                             
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </>
   ) 
}

export default NavBar
