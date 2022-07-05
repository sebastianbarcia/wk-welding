import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

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
            <p>Hemos recibido tu mensaje, {data.name}!</p> 
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <p>Te contestaremos a tu dirección de correo electrónico: {data.mail}.</p>
            <p>Toma nota de tu numero de identificación de este mensaje: {idClient}</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>                 
            <Button variant="contained" id="colorBtnAddToCart" onClick={btnCall} autoFocus>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }