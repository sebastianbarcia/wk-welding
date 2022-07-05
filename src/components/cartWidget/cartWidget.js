import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import ListItem from '@mui/material/ListItem';
import './cartWidget.scss'
import {useContext} from 'react'; 
import CartContext from '../../context/CartContext';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -20,
    top: -8,
    padding: '0 4px',
  },
}));

function CartWidget() {
 
  const navigate = useNavigate();
  
  //Function to redirect to index and close the cartwidget
  const btnViewCart = () =>{
    navigate('/cart');
    setAnchorEl(null);
}
  //Fetch the contexts of cart items and to delete each item
  const { cartListItems , deleteItemCart } = useContext(CartContext)
  
  //Hook to close and open the cartwidget
  const [anchorEl, setAnchorEl] = React.useState(null);

  //Constant to open the cartwidget
  const open = Boolean(anchorEl);

  //Event to open the cartwidget
  const handleClick = (event) => {
    //If you are in the pages "/cart" or "/order" it does not open the cartwidget 
    if(window. location. pathname !== "/cart" && window. location. pathname !== "/order"){
    setAnchorEl(event.currentTarget);
    }
  };
  //close the cartwidget
  const handleClose = () => {
    setAnchorEl(null);
  };
  //Add the items and their quantities to show them in the badge of the "cart" button
  const plusItemsQuantity = cartListItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
    
  return (
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <StyledBadge badgeContent={plusItemsQuantity} color="secondary">
            <ShoppingCartOutlinedIcon className='spaceBtn'></ShoppingCartOutlinedIcon><span id='cart-disappear'>Carrito</span>  
            </StyledBadge> 
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <div className='container-cart'>
              {cartListItems.length === 0 && <div className='cartEmpty'><p>No hay productos en el carrito </p>< ProductionQuantityLimitsOutlinedIcon/> </div> }
              <List className="cart-widget-list">
              {cartListItems.map((item) => {
                return(
                  <>
                  <ListItem  key={item.id}>
                  <ListItemAvatar>
                      <Avatar  variant="rounded">
                          <img src={item.image} />           
                      </Avatar>
                  </ListItemAvatar>
                      <ListItemText primary={item.title} secondary={`€ ${item.price}`} />
                      <div>
                          <p>{item.quantity}</p>
                      </div>
                  <Tooltip title="Eliminar">
                      <IconButton onClick={() => deleteItemCart( item.id )}>
                          <DeleteIcon />
                      </IconButton>
                  </Tooltip>
                  
              </ListItem>
          <Divider variant="inset" component="li" />
          </>   )
          })}  
          {cartListItems.length !== 0 ? <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={btnViewCart}>
            Procesar compra
            </Button> : " " } 
          </List>          
        </div>
      </Menu>
    </div>
  );
}

export default CartWidget