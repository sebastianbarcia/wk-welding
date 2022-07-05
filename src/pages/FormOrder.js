import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { addDoc , collection} from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import ModalCheckOut from '../components/modal/modal';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import './FormOrder.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const FormOrder = () =>{
    //Hook state to open modal
    const [open, setOpen] = React.useState(false);
    //Function to open modal if input checks are met
    const handleOpen = () => {
       
        setMailVerify(/\S+@\S+/.test(formValue.mail))
        setNameCheck(formValue.name.length <= 3);
        setPhoneCheck(formValue.phone.length <= 5);
        setAdressCheck(formValue.address.length <= 4);
        setCityCheck(formValue.city.length <= 3);
        setCountryCheck(formValue.country.length <= 3)

        if(verifySetClient){
        setOpen(true)
        }
    };

    //Close modal
    const handleClose = () => setOpen(false);

    //Hook state of objects to fill through inputs and send them to firebase
    const [formValue,setFormValue] = useState({
        name: '',
        phone: '',
        mail: '',
        address: '',
        city: '',
        country: ''
    })
    
    //Call to localStorage to render the order in the page and modal
    const orderClient = JSON.parse(localStorage.getItem("order"))
    let bringPrice = JSON.parse(localStorage.getItem("account"));  
    
    //Inputs
    const formsContact = [
        {"label":"Nombre y apellido", "type":"text", "id":1 , name : "name", value: formValue.name },
        {"label":"Mail", "type":"mail", "id":2, name: "mail", value: formValue.mail },
        {"label" : "Telefono" , "type" : "number", "id":3 , name: "phone", value: formValue.phone },
        {"label" : "Dirección", "type": "text", "id":4, name: "address", value: formValue.address },
        {"label" : "Ciudad", "type": "text", "id":5, name: "city", value: formValue.city },
        {"label" : "País", "type": "text", "id":6, name: "country", value: formValue.country },
    ]
    
    //Use state to send customer data, chosen products and order total to firebase
    const [order,setOrder] = useState({
        buyer: {},
        items: orderClient.map(item => {        
            return{
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        total: bringPrice
    })
    
    //Order id
    const [success,setSuccess] = useState();

    //UseState to verify account
    const [mailCheck, setMailVerify] = useState(true); 
    const [nameCheck, setNameCheck] = useState(formValue.name.length > 3);
    const [phoneCheck, setPhoneCheck] = useState(formValue.phone.length > 5);
    const [addressCheck, setAdressCheck] = useState(formValue.address.length > 4);
    const [cityCheck, setCityCheck] = useState(formValue.city.length > 3);
    const [countryCheck , setCountryCheck] = useState(formValue.country.length > 3);

    //Price calculation + shipping and total
    const totalDelivery = bringPrice * 0.03; 
    const totalPriceWithDelivery = totalDelivery + bringPrice;

    //Bring from the context function to clean the cart and local storage after the purchase is finished
    const { clearOrder } = useContext(CartContext);
    
    //Input checks
    const verifySetClient = (
        formValue.name.length > 3 &&
        formValue.phone.length > 5 && 
        formValue.address.length > 4 && 
        formValue.country.length > 3 && 
        ((/\S+@\S+/.test(formValue.mail) === true)))
    
    //Event to send form to firebase
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(verifySetClient){
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
        }
    }

    const handleChange = (e) =>{   
        setFormValue({...formValue, [e.target.name] : e.target.value })
    }

    //Send order to firebase
    const saveData = async (newOrder) =>{
        const orderFirebase = collection(db , "order")
        const orderDoc = await addDoc(orderFirebase , newOrder)
            
        setSuccess(orderDoc.id);
        clearOrder()  
    }
    
    return(
        <>
            <Container maxWidth="xl" className='title-cartandorder' id="title-order"> 
                <div>
                    <h2>Formulario de compra</h2>
                </div> 
                <Box component="form" onSubmit={handleSubmit} className='form-styles' noValidate autoComplete="on">
                    <Grid container gap={8} className="order-reverse">
                        <Grid item lg={6} md={6} xs={12} className="form-media-orders">                             
                            {formsContact.map((form) =>{
                                return(
                                    <>
                                        <TextField id="outlined-basic" className='color-form' color="warning"
                                        label={form.label} name={form.name} variant={"outlined"} type={form.type} key={form.id} onChange={handleChange} value = {form.value} />
                                        {(form.id === 1 && (nameCheck)) && <p className='error-form'>Por favor, escribe tu nombre</p> }
                                        {(form.id === 2 && (mailCheck === false) ) && <p className='error-form'>No pudimos procesar tu mail, vuelve a escribirlo</p> }
                                        {(form.id === 3 && (phoneCheck)) && <p className='error-form'>Por favor, escribe tu numero de telefono</p>}
                                        {(form.id === 4 && (addressCheck)) && <p className='error-form'>Por favor, escribe tu direccción</p>}
                                        {(form.id === 5 && (cityCheck))  && <p className='error-form'>Por favor, escribe tu ciudad</p> }
                                        {(form.id === 6 && (countryCheck))  && <p className='error-form'>Por favor, escribe tu país</p> }
                                    </>
                                    )  
                                })}
                            <Button variant="contained" id = "colorBtnAddToCart" type='submit' onClick={ handleOpen }>Enviar</Button>  
                            <ModalCheckOut open={open} onClose={ handleClose } data={formValue} productsOrders={order.items} idClient={success}></ModalCheckOut>       
                        </Grid>
                        <Grid item lg={4} md={4}  xs={12}>                        
                            <List component="nav" aria-label="mailbox folders" className='color-account-order' id = "color-order-form">
                                <ListItem className='paragraph-theme'>
                                    <Typography variant='h6' >Resumen del pedido</Typography>
                                </ListItem>
                                <ListItem className='quit-media-order'>
                                    <ListItemText primary="Subtotal" /> <p>€ {bringPrice.toFixed(2)}</p>
                                </ListItem>
                                <Divider className='quit-media-order' />
                                <ListItem  divider className='quit-media-order'>
                                    <ListItemText primary="Gastos de envios" /><p>€ {totalDelivery.toFixed(2)}</p>
                                </ListItem>
                                <ListItem className='paragraph-theme'>
                                    <ListItemText primary="Precio total"/><h3>€ {totalPriceWithDelivery.toFixed(2)}</h3>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>    
            </Container>
        </>
    )
}

export default FormOrder