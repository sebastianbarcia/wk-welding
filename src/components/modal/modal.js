import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import './modal.scss'
//Modal to finish purchase process
//Props to enter information in it
export default function ModalCheckOut({ productsOrders, open , data , idClient }) {
  const navigate = useNavigate();
  //Pressing the "close" button redirects the page to the index and the local storage is deleted
  const btnCall = () =>{
  navigate('/')
  localStorage.clear("order")
  }

  return (
    <div>    
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant='h5'>Gracias por tu compra {data.name}!</Typography> 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant='subtitle1'>Llevaremos los siguientes productos:</Typography>
          {productsOrders.map((item) => {
          return(
            <Typography variant='body1' className='item-modal-order'>{item.title}</Typography>
          )
          })}
          <Typography className='item-adress-order'>A tu direccion en {data.address}, {data.city}, {data.country}.</Typography>
          <Typography>El numero de identificación de tu pedido es el <span className='item-modal-order'>{idClient}</span> </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>                 
          <Button variant="contained" id="colorBtnAddToCart" onClick={btnCall} autoFocus>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}