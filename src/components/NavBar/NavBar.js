import './NavBar.scss';
import { Container, Grid, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CartWidget from '../cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { pages } from '../../utils/navBarOptions';
import CustomizedMenus from '../MenuNavBar/menuNavBar';

//Content: fetched from pages '../../utils/navBarOptions'

//Menu styles
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
    //Opening and closing menu
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
   return(
       <>         
        <ThemeProvider theme={themeWK}>   
            <AppBar position="static" id='navBar-fixed'>               
                <Toolbar className='toolbar'>
                    <Container maxWidth="xl">
                        <Grid container id='grid-mediaquery'>
                            <Grid item md={2}  className = 'pos-logo'>
                                <Link to='/' className='contenedorLogo'>
                                    <img className='styleLogo' src="./logo-wk-v2-png.png" alt='logo' />
                                </Link>
                            </Grid>
                            <Grid md={7.7}  className='grid-links'>
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
                                    <Button onClick={handleOpenNavMenu}>
                                    <MenuIcon/>
                                    </Button>
                                    <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                    >
                                    {pages.map((page) => (
                                        page.id === 1 ? <CustomizedMenus/> : 
                                        <Link to={page.link}>
                                            <MenuItem key={page.id} onClick={handleCloseNavMenu}>    
                                                <Button id="links-nav-bar">               
                                                    {page.title}
                                                </Button>
                                            </MenuItem>
                                        </Link>
                                        ))}
                                    </Menu>
                                </Box>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="link-buttons">
                                    {pages.map((page) => (
                                        page.id === 1 ? <CustomizedMenus/> : 
                                        <Link to={page.link} >
                                            <Button id='no-color' 
                                                key={page.id}
                                                onClick={handleCloseNavMenu}
                                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                                {page.title}
                                            </Button>
                                        </Link>                                   
                                    ))}
                                </Box>
                            </Grid>
                            <Grid md={2}  className="cart-widget">                               
                                <Tooltip title="Open settings">
                                    <CartWidget/>     
                                </Tooltip>                
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
