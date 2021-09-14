import React, {useState} from "react";
import classes from './CheckoutCard.module.css';
// Imports
import RemoveImg from '../../../assets/images/delete.svg';
//Libraries Imports
import {connect} from "react-redux";
import * as actions from '../../../store/Actions/allActions';

const CheckoutCard = (props) => {

    const [mealNumber, setMealNumber] = useState(1);


    return (
        <div className={classes.Card}>
            {/*IMG*/}
            <div className={classes.ImageContainer}>
                <img src={props.Image} alt={"meal"}/>
            </div>
            <h4>{props.Name}</h4>
            {/*Remove Part*/}
            <div
                onClick={() => props.onRemoveCheck(props.Name)}
                className={classes.RemoveContainer}>
                <img src={RemoveImg} alt={'remove'} />
            </div>
            {/*CheckoutCard BTN*/}
            <button
                onClick={() => {mealNumber < 5 ? setMealNumber(mealNumber + 1) : setMealNumber(5)}}
                className={classes.ButtonNumber}>&#43;</button>
            <span className={classes.MealNumber}>{mealNumber}</span>
            <button
                onClick={() => {mealNumber > 0 ? setMealNumber(mealNumber - 1) : setMealNumber(0)}}
                className={classes.ButtonNumber}>&minus;</button>
        </div>
    )
}

// Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveCheck: (mealName) => dispatch(actions.RemoveCheck(mealName))
    }
}


export default connect(null, mapDispatchToProps)(CheckoutCard);