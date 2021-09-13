import React from "react";
import classes from './textArea.module.css';

const TextArea = (props) => {

    return (
        <div className={classes.TextAreaContainer}>
            <label htmlFor='Objection_Text'>Objection</label>
            <textarea
                placeholder={'Type Your Objection'}
                id='Objection_Text'
                className={classes.TextArea}
                value={props.value}
                onChange={(event) => props.changed(event.target.value, event.target.id)}/>
            {props.touched && !props.valid ? <p className={classes.Error}>{props.errorMessage}</p> : null}
        </div>
    )
}

export default TextArea;