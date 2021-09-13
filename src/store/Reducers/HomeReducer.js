import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    ObjectionLoading: false,
}


const HomeReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ObjectionStart:
            return {...state, ObjectionLoading: true}
        case actionTypes.ObjectionSuccess:
            return {...state, ObjectionLoading: false}
        case actionTypes.ObjectionFail:
            return {...state, ObjectionLoading: false}
        default: return state;
    }
}

export default HomeReducer;