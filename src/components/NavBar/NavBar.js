import './NavBar.scss';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cart from '../cart/Cart';

import { Link } from 'react-router-dom';

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
                                <Link to='/' className='contenedorLogo'>
                                    <img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' />
                                </Link>
                            </Grid>
                            <Grid md={8} xs={12} className='center-navBar' >
                                <ul className='nav'>
                                    <li><Link to= '/'>Productos</Link> 
                                        <ul className='columnUl'>
                                       {/* {navBarOptions.map((optionProducts) => {
                                                                                                
                                            return(
                                                <>
                                                    <li>{optionProducts.category}                                            
                                                        <ul>
                                                            <li>{optionProducts.products}</li>                                                        
                                                        </ul>
                                                    </li>                                                
                                                </>
                                                )
                                            })}  */}
                                             
                                            <li><Link to = {`/category/Soldadoras`} >Equipos de soldadura y corte</Link>
                                                <ul>
                                                    <li><Link to ='/MMA'>MMA</Link></li>
                                                    <li><Link to ='/TIG'>TIG</Link></li>
                                                    <li><Link to ='/MIG-MAG'>MIG-MAG</Link></li>
                                                    <li><Link to ='/Arco'>Arco sumergido</Link></li>
                                                    <li><Link to= '/Plasma'>Equipos de plasma</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to = {`/category/Antorchas`}>Antorchas</Link>
                                                <ul>
                                                    <li><Link to ='/Antorcha-TIG'>TIG</Link></li>
                                                    <li><Link to ='/Antorcha-MIG-MAG'>MIG-MAG</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to = '/category/Automatización'>Automatización</Link></li>
                                            <li><Link to ='/category/Proteccion'>Equipo de protección</Link></li>
                                            <li><Link to = '/category/Consumibles'>Consumibles de soldadura</Link></li>
                                            <li><Link to= '/category/Respaldo'>Respaldo ceramico</Link></li> 
                                        </ul>
                                    </li>
                                    <li><Link to= '/us'>Nosotros</Link></li>
                                    <li><Link to= '/Contact'>Contacto</Link></li>                
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
