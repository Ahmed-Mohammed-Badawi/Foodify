import React from "react";
import classes from './Loading.module.css';

const Loading = () => {
    return (
        <div className={classes.SpinnerContainer}>
            <div className={classes.Spinner}>
                <div className={classes.Cube1}></div>
                <div className={classes.Cube2}></div>
            </div>
        </div>
    )
}

export default Loading;