import './ContactForm.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const formsContact = [
    {"label":"Nombre", "type":"text"},
    {"label":"Mail", "type":"email"},
]

const ContactForm = () =>{
    return(
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '100%' },}} noValidate autoComplete="off">
            {formsContact.map((forms) =>{
                return(
            <TextField id="outlined-basic" className='color-form' label={forms.label} variant={"outlined"} type={forms.type} />
                )
            })
            }            
            <TextField id="outlined-basic"  multiline rows={4} className='color-form' label={"Mensaje"} variant={"outlined"} type= {"text"}/>
            <div>
                <Button variant="contained" id = "colorBtnAddToCart" type='submit'>Enviar</Button>
            </div>
        </Box>        
    )
}

export default ContactForm