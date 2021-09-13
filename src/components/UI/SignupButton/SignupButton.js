import React from "react";
import classes from './SignupButton.module.css';

const SignupButton = (props) => (
    <button
        className={classes.Button}
        onClick={props.clicked}
        style={props.style ? props.style : null}
    >
        {props.children}
    </button>
)

export default SignupButton;