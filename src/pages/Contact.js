import { Container, Grid } from "@mui/material";
import ContactsForms from "../components/inputsForm/contactForm";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SettingsCellOutlinedIcon from '@mui/icons-material/SettingsCellOutlined';
import '../pages/Contact.scss';
import { contact } from "../utils/helper";

const Contact = () => {
    return(
        <>
        <Container fixed id="container-container">
        <h2>Contacto</h2>
            <Grid container gap={1} className='contact-styles' justifyContent='space-between' >
                <Grid md={4.5} xs={12} className='contact-method'>
                    <div> 
                        {contact.map(({title,phone,mail,movilPhone}) => {
                        return(
                            <>
                                <p>{title}</p>
                                <p><PhoneOutlinedIcon/>{phone}</p>
                                <p><MailOutlinedIcon/>{mail}</p>
                                <p><SettingsCellOutlinedIcon/>{movilPhone}</p>
                            </>
                            )}
                        )}                      
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