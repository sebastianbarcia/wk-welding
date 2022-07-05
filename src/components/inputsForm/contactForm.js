import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { addDoc , collection} from 'firebase/firestore';
import ModalContact from '../modalContact/ModalContact';
import db from '../../utils/firebaseConfig';
import "../inputsForm/ContactsForm.scss"


const ContactsForms = () => {

    //Hook opens and closes modal
    const [open, setOpen] = React.useState(false);

    //Loading user data to take it to the backend 
    const [ valueContact , setContactValue] = useState({
        name: '',
        mail: '',
        message: ''
    });

    //Inputs
    const formsContact = [
        {"label":"Nombre", "type":"text", "id":1, name: "name" , value: valueContact.name },
        {"label":"Mail", "type":"mail", "id":2 , name: "mail" , value: valueContact.mail },
    ]

    //Input loading
    const handleChange = (e) =>{   
        setContactValue({...valueContact, [e.target.name] : e.target.value })       
    }
    //Input verification
    const verifySetCustomers = (
        valueContact.name.length > 3 &&
        valueContact.message.length > 5 &&
        ((/\S+@\S+/.test(valueContact.mail) === true))
    )
    //Constant for id
    const [success,setSuccess] = useState();
    //Event to send the data to the backend and validation inside the function
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(verifySetCustomers){
        saveData({contact: valueContact})
        }
    }
    //Saving order and user data in the backend - firebase
    const saveData = async (newContact) =>{
        const contactFirebase = collection(db , "contact")
        const contactDoc = await addDoc(contactFirebase , newContact)
        setSuccess(contactDoc.id);   
    }
    
    //Input validation hooks (mail, name and messages)
    const [mailCheck, setMailVerify] = useState(true); 
    const [nameCheck, setNameCheck] = useState(valueContact.name.length > 3);
    const [messageCheck, setMessageCheck ] = useState(valueContact.message.length > 5);
    
    //Open modal with input checks
    const HandleOpen = () => {
        
        setMailVerify(/\S+@\S+/.test(valueContact.mail));
        setNameCheck(valueContact.name.length < 3);
        setMessageCheck(valueContact.message.length < 5);

        if(verifySetCustomers){
        setOpen(true)
        }
    };

    //Close modal
    const HandleClose = () => setOpen(false);

    return(
        <Box component="form" className='form-styles' noValidate autoComplete="off"  onSubmit={handleSubmit}>
            {formsContact.map((forms) =>{
                return(
                    <>
            <TextField id="outlined-basic" className='color-form' color="warning" onChange={ handleChange }
             label={forms.label} variant={"outlined"} type={forms.type} key={forms.id} name={forms.name} value = {forms.value} />
             {(forms.id === 1 && (nameCheck)) && <p className='error-form'>Por favor, escribe tu nombre</p> }
             {(forms.id === 2 && (mailCheck === false) ) && <p className='error-form'>No pudimos procesar tu mail, vuelve a escribirlo</p> }
             </>)
            })
            }            
            <TextField id="outlined-basic" color="warning" multiline rows={4} className='color-form' onChange={ handleChange } label={"Mensaje"} variant={"outlined"} type= {"text"} name="message"  />
            {messageCheck && <p className='error-form'>Que nos quieres escribir?, dejanos tu mensaje</p>}
            <div>
                <Button variant="contained" id = "colorBtnAddToCart" type='submit' onClick={ HandleOpen } >Enviar</Button>
            </div>
            <ModalContact open={open} onClose={ HandleClose } data={valueContact} idClient={success}/> 
        </Box>        
    )
}

export default ContactsForms;