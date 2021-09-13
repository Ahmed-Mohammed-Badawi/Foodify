import * as actionTypes from './actionTypes';
// When Card Checked
export const CardChecked = (cardData) => {
    return {
        type: actionTypes.CARD_CHECKED,
        data: cardData
    }
}
// When card unChecked
export const RemoveCheck = (mealName) => {
    return {
        type: actionTypes.REMOVE_CHECK,
        mealName: mealName
    }
}

// When search input value changes
export const InputChanged = (searchWord) => {
    return{
        type: actionTypes.SEARCH_INPUT_CHANGED,
        searchWord: searchWord
    }
}

// When checkbox change
export const CheckboxChanged = (filterType) => {
    return{
        type: actionTypes.CHECKBOX_CHANGED,
        filterType: filterType
    }
}