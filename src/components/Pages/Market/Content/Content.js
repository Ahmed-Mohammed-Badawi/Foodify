import React from "react";
//Imports
import BreakfastMeals from "./BreakfastMeals/BreakfastMeals";
import LunchMeals from "./LunchMeals/LunchMeals";
import SweetMeals from "./SweetMeals/SweetMeals";
//Imports Library
import '@splidejs/splide/dist/css/splide.min.css';
// redux imports
import {connect} from "react-redux";

const Content = (props) => {

    return (
        <section>
            {(!props.isChecked_1 && !props.isChecked_2 && !props.isChecked_3) || props.isChecked_1 ?
                <BreakfastMeals SearchWord={props.SearchWord}/>
                : null}
            {(!props.isChecked_1 && !props.isChecked_2 && !props.isChecked_3) || props.isChecked_2 ?
                <LunchMeals SearchWord={props.SearchWord}/>
                : null}
            {(!props.isChecked_1 && !props.isChecked_2 && !props.isChecked_3) || props.isChecked_3 ?
                <SweetMeals SearchWord={props.SearchWord}/>
                : null}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        SearchWord: state.Market.SearchWord,
        isChecked_1: state.Market.CheckBoxes.breakfast,
        isChecked_2: state.Market.CheckBoxes.lunch,
        isChecked_3: state.Market.CheckBoxes.sweet
    }
}

export default connect(mapStateToProps)(Content);