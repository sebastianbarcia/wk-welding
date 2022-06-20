import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Grid } from '@mui/material';
import { useState } from 'react';
import { addDoc , collection} from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import ModalCheckOut from '../components/modal/modal';
import { useContext } from 'react';
import CartContext from '../context/CartContext';


const FormOrder = () =>{

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

    const [formValue,setFormValue] = useState({
        name: '',
        phone: '',
        mail: '',
        address: '',
        city: '',
        country: ''
    })

    const orderClient = JSON.parse(localStorage.getItem("order"))
    const priceOrderClient = JSON.parse(localStorage.getItem("account"))
    
    const formsContact = [
        {"label":"Nombre y apellido", "type":"text", "id":1 , name : "name", value: formValue.name },
        {"label":"Mail", "type":"mail", "id":2, name: "mail", value: formValue.mail },
        {"label" : "Telefono" , "type" : "number", "id":3 , name: "phone", value: formValue.phone },
        {"label" : "Dirección", "type": "text", "id":4, name: "address", value: formValue.address },
        {"label" : "Ciudad", "type": "text", "id":5, name: "city", value: formValue.city },
        {"label" : "País", "type": "text", "id":6, name: "country", value: formValue.country },
    ]
   
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
        total: priceOrderClient
    })

    const [success,setSuccess] = useState();

    const { clearOrder } = useContext(CartContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) =>{   
       setFormValue({...formValue, [e.target.name] : e.target.value })
    }

    const saveData = async (newOrder) =>{
        const orderFirebase = collection(db , "order")
        const orderDoc = await addDoc(orderFirebase , newOrder)
        console.log("orden generada", orderDoc)
        setSuccess(orderDoc.id);
        clearOrder()  
    }

    return(
        <>
            <Container maxWidth="lg"> 
            {console.log("order:", order)}
                <div>
                    <h2>Formulario de compra</h2>
                </div> 
                <Box component="form" onSubmit={handleSubmit} className='form-styles' noValidate autoComplete="off">
                    <Grid container>
                        <Grid item md={8}>                             
                            {formsContact.map((form) =>{
                                return(
                                <TextField id="outlined-basic" className='color-form' color="warning"
                                label={form.label} name={form.name} variant={"outlined"} type={form.type} key={form.id} onChange={handleChange} value = {form.value} />
                                ) 
                            })}
                                <Button variant="contained" id = "colorBtnAddToCart" type='submit' onClick={handleOpen}>Enviar</Button>  
                                <ModalCheckOut open={open} onClose={ handleClose } data={formValue} productsOrders={order.items} idClient={success}></ModalCheckOut>       
                        </Grid>
                    </Grid>
                </Box>    
            </Container>
        </>
    )
}

export default FormOrder