import * as React from 'react';
import Switch from '@mui/material/Switch';

const Colors = (props) => {
//Render the switch to choose additional torch to welders
    return(
        <>
            <Switch onChange={props.event}  color="warning"/>
        </>
    )
}

export default Colors