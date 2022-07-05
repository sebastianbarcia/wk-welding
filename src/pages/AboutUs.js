import '../pages/AboutUs.scss';
import { Link } from 'react-router-dom';
import { Button, Container, Grid , Typography } from '@mui/material';
import { textContact , textAboutUs } from '../utils/helper';

const AboutUs = () =>{
    //Cover image
    const containerStyle = {
        backgroundImage: 
            "url(./portada_a+-8-negro.jpg)", 
      };
      //Second section background image
      const AboutUsSection = {
        backgroundImage:
        "url(./visual-background-01.svg)",
      }
      //Texts from '../utils/helper'
    return(
        <>
        <section className='img-about-us' style={containerStyle} >
            <Container fixed id="container-container">
                <Grid container >
                    <Grid item md={6} xs={12} >  
                    {textAboutUs.map(({title, paragraph}) => {
                       return (
                        <>
                            <h1>{title}</h1> 
                            <Typography variant="body1" gutterBottom>{paragraph}</Typography>
                        </> 
                        )
                    })}                      
                    </Grid>
                </Grid>               
            </Container>            
        </section>
        <Container maxWidth="xl"  className='section-aboutUs' style={ AboutUsSection}>
            <Grid className='about-us-contact'>
                {
                    textContact.map(({title,paragraph}) => {
                        return(
                            <>
                                <h3>{title}</h3>
                                <Typography variant="body1" gutterBottom lineHeight={2}>{paragraph}</Typography>
                            </>
                        )
                    })
                }
                <div className='decoration-aboutus'></div>
                <Button variant="contained" id = "colorBtnAddToCart"><Link to='/contact'>Contactenos</Link> </Button>
            </Grid>
        </Container>
    </>
    )
}
export default AboutUs