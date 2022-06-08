import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './cartWidget.scss'
import {useContext} from 'react'; 
import CartContext from '../../context/CartContext';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import IconButton from '@mui/material/IconButton';

function CartWidget() {
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
          {cartListItems.map((item) => {
            return(
              <div className='cart-div' key={item.id}> 
                <div className='badge-cart-info'>
                    <p>{item.title}</p>
                    <span>{item.quantity}</span>
                    <span>{item.price}</span>
                </div>
                <div className='img-cart'>
                    <img src={`${item.image}`} alt='img product'></img>
                </div>
                <div className='cart-delete'>
                <IconButton aria-label="delete"  onClick={() => deleteItemCart( item.id )}>
                    <DeleteForeverOutlinedIcon />
                </IconButton>
                </div>
              </div>
            )
          })}            
        </div>
      </Menu>
    </div>
  );
}

export default CartWidget