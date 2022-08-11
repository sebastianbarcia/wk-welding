import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function ModalContact({ open , data , idClient }) {
    
  //Pressing the "close" button redirects the page to the index
  const navigate = useNavigate();
  const btnCall = () =>{
  navigate('/');
  }
  
  return (
      <div>    
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <Typography variant='h5'>Hemos recibido tu mensaje, {data.name}!</Typography> 
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <Typography  variant='subtitle1'>Te contestaremos a tu dirección de correo electrónico: <span className='item-modal-order'>{data.mail}</span>.</Typography>
            <Typography  variant='subtitle1'>Por favor, toma nota del numero de identificación de este mensaje:<span className='item-modal-order'> {idClient}</span></Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>                 
            <Button variant="contained" id="colorBtnAddToCart" onClick={btnCall} autoFocus>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }