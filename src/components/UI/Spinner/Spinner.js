import React from "react";
import classes from './Spinner.module.css';

// Style make the spinner small
const small = {
    width: '2em',
    height: `2em`,
    borderTop: `0.3em solid rgba(255, 255, 255, 0.2)`,
    borderRight: `0.3em solid rgba(255, 255, 255, 0.2)`,
    borderBottom: `0.3em solid rgba(255, 255, 255, 0.2)`,
    borderLeft: `0.3em solid #ffffff`,
    margin: '0'
}

const Spinner = (props) => (
    <div
        className={classes.Loader}
        style={props.mini ? small : null}
    >Loading...</div>
);

export default Spinner;