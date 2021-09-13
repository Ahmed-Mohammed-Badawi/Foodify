import React from "react";
import classes from './SearchBar.module.css';
// Images Imports
import LightLogo from '../../../../assets/images/Burger-icon--light.svg';
import ShoppingCar from '../../../../assets/images/shopping-bag--light.svg';

//Library Imports
import {connect} from "react-redux";
import * as actions from '../../../../store/Actions/allActions';
//React router Imports
import {NavLink} from "react-router-dom";

const SearchBar = (props) => {

    return (
        <section className={classes.SearchBar}>
            {/*Home Link*/}
            <NavLink to={'/'} className={classes.Logo}>
                <img src={LightLogo} alt={'Logo'} />
            </NavLink>
            {/*Input Search*/}
            <input
                onChange={(event) => props.onInputChange(event.target.value)}
                value={props.SearchWord}
                className={classes.Search}
                type={'text'}
                placeholder={'Search...'} />
            {/*Checkout Link*/}
            <NavLink to={'/Checkout'} className={classes.Checkout}>
                <img src={ShoppingCar} alt={'Shopping Bag'}/>
                <p className={classes.OrdersNumber}>{props.OrdersNumber}</p>
            </NavLink>
            {/*Filter Toggle*/}
            {/*<button className={classes.Filter}>*/}
            {/*    &#9660;*/}
            {/*</button>*/}
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        OrdersNumber: state.Market.Orders.length,
        SearchWord: state.Market.SearchWord
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onInputChange: (searchWord) => dispatch(actions.InputChanged(searchWord))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);