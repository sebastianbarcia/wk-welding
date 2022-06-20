import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';



export default function ModalCheckOut({ productsOrders, open , data , idClient }) {
  const navigate = useNavigate();
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
          <p>Tu pedido esta en camino {data.name}!</p> 
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>Llevaremos los siguientes productos:</p>
          {productsOrders.map((item) => {
          return(
            <p>{item.title}</p>
          )
          })}
          <p>A tu direccion en {data.address}, {data.city}, {data.country}.</p>
          <p>El numero de identificación de tu pedido es el {idClient}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>                 
          <Button variant="contained" id="colorBtnAddToCart" onClick={btnCall} autoFocus>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}