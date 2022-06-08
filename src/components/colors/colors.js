import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Colors = () => {  
    const [torch, setTorch] = useState(false)
   
    return(
        <>
            <Switch onChange={() =>setTorch(!torch)} {...torch ?  console.log("Con antorcha")  : console.log("Sin antorcha") } defaultChecked color="warning" className='' />   
            {torch ? <p>Con antorcha</p> : <p>Sin antorcha</p>}
        </>
    )
}

export default Colors