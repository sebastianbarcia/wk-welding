import './NavBar.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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


//UpperCamelCase
const NavBar = () =>{
   return(
       <>   
        <ThemeProvider theme={themeWK}>   
            <AppBar position="static">
                <Toolbar className='toolbar'>
                <a className='contenedorLogo'><img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' /></a>
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
                    <div>       
                        <Button><ShoppingCartOutlinedIcon className='spaceBtn'></ShoppingCartOutlinedIcon>Carrito</Button>
                    </div> 
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    </>
   ) 
}

export default NavBar