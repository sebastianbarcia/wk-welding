import '../pages/AboutUs.scss';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';
import { textContact , textAboutUs } from '../utils/helper';

const AboutUs = () =>{
    const containerStyle = {
        backgroundImage: 
          "url(./portada_a+-8-negro.jpg)",
        height: "600px",       
      };

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
                            <p>{paragraph}</p>
                        </> 
                        )
                    })}                      
                    </Grid>
                </Grid>               
            </Container>            
        </section>
        <Container fixed>
            <Grid className='about-us-contact'>
                {
                    textContact.map(({title,paragraph}) => {
                        return(
                            <>
                                <h3>{title}</h3>
                                <p>{paragraph}</p>
                            </>
                        )
                    })
                }
                
                <Button variant="contained" id = "colorBtnAddToCart"><Link to='/contact'>Contactenos</Link> </Button>
            </Grid>
        </Container>
    </>
    )
}
export default AboutUs