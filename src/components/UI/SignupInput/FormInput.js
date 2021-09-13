import React from "react";
import classes from './FormInput.module.css';

const FormInput = (props) => {


    return (
        <div className={classes.input}>
            <label style={props.labelStyle} htmlFor={props.inputId}>{props.inputPlaceholder}</label>
            <input
                style={props.inputStyle}
                value={props.value}
                onChange={(event) => {
                    props.changed(event.target.value, event.target.id)
                }}
                id={props.inputId}
                type={props.type}
                placeholder={props.inputPlaceholder}/>
            {/*Check if the input valid or not for error message*/}
            {props.touched && !props.valid ? <p className={classes.Error}>{props.errorMessage}</p> : null}
        </div>
    );
}

export default FormInput;