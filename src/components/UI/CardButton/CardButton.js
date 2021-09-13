import React from "react";
import classes from './CardButton.module.css';

const CardButton = (props) => {

    return(
        <button style={props.buttonStyle} className={classes.Button} onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default CardButton;