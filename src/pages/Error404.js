import { textAlign } from "@mui/system"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Error404 = () =>{
    return(
        <>
        <h3 style={{textAlign: "center"}}>Upppsss!</h3>
        <h1 style={{textAlign: "center"}}>Error404 - Pagina no encontrada</h1>
        <div className=""><ErrorOutlineIcon/></div>        
        </>
    )
}

export default Error404