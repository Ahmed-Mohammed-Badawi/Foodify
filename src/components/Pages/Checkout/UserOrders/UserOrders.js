import React from "react";
import classes from './UserOrders.module.css';

//Libraries Imports
import {connect} from "react-redux";

//Imports
import CheckoutCard from "../../../UI/CheckoutCard/CheckoutCard";


const UserOrders = (props) => {

    // Orders Variable to render it
    let Orders = null;

    // Save Orders into Variable If it's Available
    if (props.Orders){
        // Loop on Redux Store Orders To Make Cards
        Orders = props.Orders.map((meal, index) => {
            return <CheckoutCard key={`O + ${index}`} Image={meal.mealImage} Name={meal.mealName}/>
        })
    }


    return (
        <section className={classes.OrdersContainer}>
            {/*Check If there are no Orders and Tell User*/}
            {Orders.length <= 0 ? <p style={{fontSize: '2rem', marginBottom: '3rem'}}>There are no Orders Yet</p> : null}
            {/*Orders Cards*/}
            {Orders}
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        Orders: state.Market.Orders
    }
}

export default connect(mapStateToProps)(UserOrders);