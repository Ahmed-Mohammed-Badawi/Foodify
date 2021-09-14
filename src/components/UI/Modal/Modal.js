import React, {Fragment} from "react";
import classes from './Modal.module.css';

//Imports
import Backdrop from "../Backdrop/Backdrop";
//Back Img
import BackImg from '../../../assets/images/share-option.svg';

const Modal = (props) => {
    return (
        <Fragment>
            {/*Backdrop*/}
            <Backdrop
                // Close Fn() Change the Show Status
                clicked={props.close}
                // props to Show or hide it
                show={props.show}
                />
            {/*Modal Part*/}
            <div
                style={{
                    transform: props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -100vh)',
                    opacity: props.show ? '1' : '0'
                }}
                className={classes.Modal}>
                {/*Return Children of The Modal*/}
                {props.children}
                {/*Back Button to Close Modal*/}
                <div className={classes.Close} onClick={props.close}>
                    <img src={BackImg} alt={'Back'}/>
                </div>
            </div>
        </Fragment>
    )
}

export default React.memo(Modal);