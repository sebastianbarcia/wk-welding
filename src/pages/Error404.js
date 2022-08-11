import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//Page that is activated when the url is not found
const Error404 = () =>{
    const navigate = useNavigate();
  //Pressing the "Go to homepage" button redirects the page to the index
  const btnCall = () =>{
  navigate('/')
  }
    return(
        <>
        <div className="error404">
            <Typography variant="h4">Upppsss!</Typography>
            <img src="./SVG/404error.svg"></img>
            <Typography variant="h3">Pagina no encontrada</Typography>
            <Button variant="contained" id = "colorBtnAddToCart" onClick={btnCall} >Ir a home page</Button>
        </div>        
        </>
    )
}

export default Error404