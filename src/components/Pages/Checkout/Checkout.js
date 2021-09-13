import React, {useEffect} from "react";
import classes from './Checkout.module.css';
//Imports
import UserData from "./UserData/UserData";
import UserOrders from "./UserOrders/UserOrders";
import ScrollToTop from "../../UI/ScrolltoTop/ScrolltoTop";

const Checkout = () => {

    useEffect(() => {
        // Change Page Title
        document.title = 'Cart |-| Checkout'
    }, [])

    return (
        <div className={classes.Checkout}>
            {/*User Data Part*/}
            <UserData />
            {/*User Orders Part*/}
            <UserOrders />
            {/*Scroll to top*/}
            <ScrollToTop />
        </div>
    )
}


export default Checkout;