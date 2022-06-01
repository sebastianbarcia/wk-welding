import { Container, Grid } from "@mui/material";
import ContactsForms from "../components/inputsForm/contactForm";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SettingsCellOutlinedIcon from '@mui/icons-material/SettingsCellOutlined';
import '../pages/Contact.scss'

const Contact = () => {
    return(
        <>
        <Container fixed id="container-container">
        <h2>Contacto</h2>
            <Grid container gap={1} className='contact-styles' justifyContent='space-between' >
                <Grid md={4.5} xs={12} className='contact-method'>
                    <div>                       
                        <p>Escribenos a nuestro formulario o a nuestras otras vias de comunicación:</p>
                        <p><PhoneOutlinedIcon/> Telefono: +34 986293114</p>
                        <p><MailOutlinedIcon/>  Mail: info@wkwelding.com</p>
                        <p><SettingsCellOutlinedIcon/> Movil: 699514594</p>
                    </div>
                </Grid>
                <Grid md={7} xs={12}>
                    <ContactsForms/>
                </Grid>
            </Grid>
        </Container>
        
        </>
    )
}
export default Contact