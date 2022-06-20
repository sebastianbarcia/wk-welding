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

function CartWidget() {
  const navigate = useNavigate();
  const btnViewCart = () =>{
    navigate('/cart')
}
  const { cartListItems , deleteItemCart } = useContext(CartContext)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <ShoppingCartOutlinedIcon className='spaceBtn'></ShoppingCartOutlinedIcon>Carrito
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
                  <ListItemText primary={item.title} secondary={item.price} />
                  <div>
                      <p>{item.quantity}</p>
                  </div>
              <Tooltip title="Delete">
                  <IconButton onClick={() => deleteItemCart( item.id )}>
                      <DeleteIcon />
                  </IconButton>
              </Tooltip>
              
          </ListItem>
      <Divider variant="inset" component="li" />
      </>   )
          })}  
          {cartListItems.length !== 0 ? <Button fullWidth variant ="contained" id="colorBtnAddToCart" onClick={btnViewCart}>Procesar compra</Button> : " " } 
          
          </List>          
        </div>
      </Menu>
    </div>
  );
}

export default CartWidget