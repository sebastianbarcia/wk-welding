import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Colors = () => {  

    const torchElectionYes = () =>{
        console.log("Con Antorcha")
    }
    const torchElectionNo = () =>{
        console.log("Sin Antorcha")
    }

    return(
        <>
       <FormControl >      
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="top">
                <FormControlLabel id='colors-margin' value="with" 
                labelPlacement="bottom" control={<Radio color="default" />} label="Con antorcha" onClick={torchElectionYes} />
                <FormControlLabel id='colors-margin' value="without" 
                labelPlacement="bottom" control={<Radio color="default" />}label="Sin antorcha" onClick={torchElectionNo}/>
            </RadioGroup>
        </FormControl>
        </>
    )
}

export default Colors