import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    AuthType: null,
    idToken: null,
    localId: null,
    loading: false,
    error: null
}

const authenticationReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SIGNUP:
            return {...state, loading: true}
        case actionTypes.SIGNUP_SUCCESS:
            return {...state,
                AuthType: action.AuthType,
                idToken: action.idToken,
                localId: action.localId,
                loading: false,
                error: null}
        case actionTypes.SIGNUP_FAIL:
            return {...state, loading: false, error: action.error}
        case actionTypes.LOGOUT:
            return {...state, idToken: null, localId: null, error: null}
        case actionTypes.CLEAR_ERROR:
            return {...state, error: null}
        default: return state
    }
}

export default authenticationReducer;