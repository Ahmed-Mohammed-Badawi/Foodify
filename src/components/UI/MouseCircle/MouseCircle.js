import classes from './MouseCircle.module.css';
import {useEffect, useState, Fragment} from "react";


const MouseCircle = () => {

    // Mouse Place In state
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    //use effect to disable rendering in every change
    useEffect(() => {

        window.addEventListener('mousemove', (event) => {
            // reset mouse place
            setMouseX(event.pageX);
            setMouseY(event.pageY);
        });

    }, [])

    return (
        <Fragment>
            <div style={{
                transform: `translate(calc(${mouseX}px - 1.5rem), calc(${mouseY}px - 1.5rem))`
            }}
                 className={classes.BigCircle}>

            </div>
            <div style={{
                transform: `translate(calc(${mouseX}px - .5rem), calc(${mouseY}px - .5rem))`
            }}
                 className={classes.Circle}>
            </div>
        </Fragment>
    )
}

export default MouseCircle;