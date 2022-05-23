import './NavBar.scss';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cart from '../cart/Cart';
import { navBarOptions } from '../navBarOptions';

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
                                       {navBarOptions.map((optionProducts) => {
                                                                                                
                                            return(
                                                <>
                                                    <li><a>{optionProducts.category}</a>                                            
                                                        <ul>
                                                            <li><a>{optionProducts.products}</a></li>                                                        
                                                        </ul>
                                                    </li>                                                
                                                </>
                                                )
                                            })} 
                                           
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
