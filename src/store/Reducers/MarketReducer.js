import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    Orders: [],
    SearchWord: '',
    CheckBoxes: {
        breakfast: false,
        lunch: false,
        sweet: false
    }
}

const MarketReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CARD_CHECKED:
            return {...state, Orders: [...state.Orders, action.data]};
        case actionTypes.REMOVE_CHECK:
            console.log(action.mealName)
            return {
                ...state,
                Orders: state.Orders.filter(card => card.mealName !== action.mealName , [])
            }
        case actionTypes.SEARCH_INPUT_CHANGED:
            return {
                ...state,
                SearchWord: action.searchWord
            }
        case actionTypes.CHECKBOX_CHANGED:
            return {
                ...state,
                CheckBoxes: {
                    ...state.CheckBoxes,
                    [action.filterType]: !state.CheckBoxes[action.filterType]
                }
            }
        default: return state
    }
}
export default MarketReducer;