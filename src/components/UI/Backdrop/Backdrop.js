import React from "react";
import classes from './Backdrop.module.css';


const Backdrop = (props) => {

    let Backdrop = null;

    if (props.show){
        Backdrop = <div
            onClick={props.clicked}
            className={classes.Backdrop}> </div>
    }

    return Backdrop;
}

export default Backdrop