import * as actionTypes from './actionTypes';
import axios from "axios";

/*
* [1]: check if it's login or signup
* [2]: send a request to server
* [3]: when it success dispatch success action
* [2]: when it fails dispatch fail action
*/
export const SignupStart = (Data, ActionType) => {
    return (dispatch) => {
        dispatch(Signup())
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpdvn43kWEEtHT1-CBvZzMytJewE2a7N0`;

        if (ActionType === 'Login') {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDpdvn43kWEEtHT1-CBvZzMytJewE2a7N0`
        }

        const DataUpdated = {
            ...Data,
            returnSecureToken: true
        }

        axios.post(url, DataUpdated)
            .then((response) => {
                dispatch(SignupSuccess(response.data.idToken, response.data.localId, ActionType))
            })
            .catch(error => {
                dispatch(SignupFail(error.message))
            })
    }
}

// Sign up action which change the loading state
export const Signup = () => {
    return {
        type: actionTypes.SIGNUP
    }
}

// action which dispatch whenever a request success
export const SignupSuccess = (idToken, localId, ActionType) => {

    localStorage.setItem('token', idToken);
    localStorage.setItem('localId', localId);
    const expirationTime = new Date(new Date().getTime() + 3600 * 1000);
    localStorage.setItem('expirationTime', expirationTime);


    return {
        type: actionTypes.SIGNUP_SUCCESS,
        idToken: idToken,
        localId: localId,
        AuthType: ActionType
    }
}

// action which dispatch whenever a request Fail
export const SignupFail = (error) => {
    return {
        type: actionTypes.SIGNUP_FAIL,
        error: error
    }
}

// an action that clear the error message when unmount a component
export const ClearError = () => {
    return {
        type: actionTypes.CLEAR_ERROR
    }
}

// Logout Action
export const Logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('localId');
    localStorage.removeItem('expirationTime');

    return {
        type: actionTypes.LOGOUT
    }
}

// check time to sign out
export const checkAuthTimeOut = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(Logout())
        }, expirationTime * 1000)
    }
}

// checking action when the page loading Authenticated or not
export const checkOnLoadAuthenticationState = () => {
    return (dispatch) => {
        const token = localStorage.getItem('token');

        if (!token) {
            dispatch(Logout())
        } else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'));

            if (expirationTime < new Date()) {
                dispatch(Logout())
            } else {
                const localId = localStorage.getItem('localId');

                dispatch(SignupSuccess(token, localId, 'Login'));
                dispatch(checkAuthTimeOut((expirationTime.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}
