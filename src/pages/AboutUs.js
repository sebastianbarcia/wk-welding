import '../pages/AboutUs.scss';
import { Link } from 'react-router-dom';
import { Button, Container, Grid } from '@mui/material';

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
                        <h1>Conocenos</h1>            
                        <p>En constante comunicación con la industria de la soldadura y principalmente con los usuarios finales de la tecnología aplicada, WKwelding ha desarrollado una gama completa de soluciones que vienen a cubrir las principales necesidades de sus clientes.
                            Nuestro objetivo es escuchar a la industria para poder entender las necesidades de los soldadores y perfeccionar nuestros productos en base a su experiencia.
                            WKwelding ofrece una gama completa de productos, desde inverter para soldadura MMA hasta equipos MIG MAG con tecnología pulsada, además de sistemas de soldadura automatizada y todo tipo de consumibles y accesorios de soldadura.
                            Queremos crear equipos cada vez más precisos y fiables basándonos en la experiencia de los mayores expertos en este campo: los soldadores.
                        </p>
                    </Grid>
                </Grid>               
            </Container>            
        </section>
        <Container fixed>
            <Grid className='about-us-contact'>
                <h3> Descubra su nuevo apoyo en técnicas de soldadura.</h3>
                <p>WKwelding cuenta con una red de distribución en constante crecimiento y altamente cualificada que le aportará un servicio técnico de primer nivel y le ayudará a resolver cualquier consulta que tenga en relación a nuestros productos.</p>
                <Button variant="contained" id = "colorBtnAddToCart"><Link to='/contact'>Contactenos</Link> </Button>
            </Grid>
        </Container>
    </>
    )
}
export default AboutUs