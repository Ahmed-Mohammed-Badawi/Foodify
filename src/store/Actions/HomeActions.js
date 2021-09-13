import * as actionTypes from './actionTypes';
import axios from "axios";

// When submit the Objection Form
export const ObjectionFormSubmit = (data) => {
    return dispatch => {
        // url : https://foodify-b8773-default-rtdb.firebaseio.com/
        dispatch(ObjectionStart())
        axios.post(`https://foodify-b8773-default-rtdb.firebaseio.com/Objections.json`, data)
            .then(response => {
                dispatch(ObjectionSuccess())
                console.log(response)
            })
            .catch(error => {
                dispatch(ObjectionFail())
                console.log(error)
            })
    }
}
// When Start Sending
export const ObjectionStart = () => {
    return {
        type: actionTypes.ObjectionStart
    }
}
//When Sending Success
export const ObjectionSuccess = () => {
    return {
        type: actionTypes.ObjectionSuccess
    }
}
//When Sending Fail
export const ObjectionFail = () => {
    return {
        type: actionTypes.ObjectionFail
    }
}