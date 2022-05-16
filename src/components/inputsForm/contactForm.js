import './contactForm.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const ContactForm = () =>{
    return(
        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '100%' },}} noValidate autoComplete="off">
            <TextField id="outlined-basic" className='color-form' label="Nombre" variant="outlined" type="text" />
            <TextField id="outlined-basic" className='color-form' label="Mail" variant="outlined" type= "email" />
            <TextField id="outlined-basic"  multiline rows={4} className='color-form' label="Mensaje" variant="outlined" type= "textt"/>
            <div>
                <Button variant="contained" id= "colorBtnAddToCart" type='submit'>Enviar</Button>
            </div>
        </Box>        
    )
}

export default ContactForm