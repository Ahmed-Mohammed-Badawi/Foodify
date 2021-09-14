import React, {useEffect, useState} from "react";
import classes from './Card.module.css';
// Imports
import CardButton from "../CardButton/CardButton";
//Libraries Imports
import {connect} from "react-redux";
import * as actions from '../../../store/Actions/allActions';

const Card = (props) => {


    useEffect(() => {
        // Check if the item selected from other page or no to check it
        if (props.Orders.includes(props.cardData)) {
            setCheckState(true)
        }
    }, [props.Orders, props.cardData])

    // Card checked or not State
    const [checkState, setCheckState] = useState(false);

    // on Click check add or remove from state
    const cardClicked = () => {
        if (!checkState) {
            // Change the style when is true
            setCheckState(true);
            // add cart data to state Redux
            props.onCardChecked(props.cardData)
        } else {
            // reset the style when it's false
            setCheckState(false);
            //remove item data from state Redux
            props.onRemoveCheck(props.cardData.mealName)
        }
    }

    return (
        <div className={classes.Card}>
            {/*IMG*/}
            <div className={classes.ImageContainer}>
                <img src={props.Image} alt={"meal"}/>
            </div>
            <h4>{props.Name}</h4>
            {/*Heart Part*/}
            <svg onClick={cardClicked} className={[classes.Heart, checkState ? classes.Bought : null].join(' ')}
                 version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
                <path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
			c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
			c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
			s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
			C512,93.417,453.532,30,376,30z"/>
            </svg>
            {/*Card BTN*/}
            <CardButton
                // Call Fn() To Show Modal Card of Meal Data
                clicked={() => props.cardClicked(props.cardData)}
            >
                Show
            </CardButton>
        </div>
    )
}

// Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        onCardChecked: (data) => dispatch(actions.CardChecked(data)),
        onRemoveCheck: (mealName) => dispatch(actions.RemoveCheck(mealName))
    }
}

const mapStateToProps = (state) => {
    return {
        Orders: state.Market.Orders
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);