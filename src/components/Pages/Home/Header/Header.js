import React from "react";
import classes from './Header.module.css';
// Imports
import Logo from '../../../../assets/images/Burger-Logo.svg';
import ShoppingBag from '../../../../assets/images/shopping-bag.svg';
import FacebookLogo from '../../../../assets/images/facebook.svg';
import TwitterLogo from '../../../../assets/images/twitter.svg';
import GoogleLogo from '../../../../assets/images/google-plus.svg';
import LogoutIcon from '../../../../assets/images/logout.svg';

//Libraries Imports
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../../../store/Actions/allActions';


const Header = (props) => {

    return (
        <header className={classes.Header}>
            {/* Logo*/}
            <div className={classes.Logo}>
                <div className={classes.LogoContainer}>
                    <img src={Logo} alt={'Logo'}/>
                </div>
            </div>
            {/* Options [Shopping Bag]*/}
            <div className={classes.Options}>
                <NavLink exact to={"/Checkout"}>
                    <div className={classes.ShoppingCar}>
                        <img src={ShoppingBag} alt={'Shopping Car'} />
                        <div className={classes.Number}>{props.OrdersNumber}</div>
                    </div>
                </NavLink>
            </div>
            {/*Letters Name*/}
            <div className={classes.Name}>
                <div className={classes.Letter}>F</div>
                <div className={classes.Letter}>O</div>
                <div className={classes.Letter}>O</div>
                <div className={classes.Letter}>D</div>
                <div className={classes.Letter}>I</div>
                <div className={classes.Letter}>F</div>
                <div className={classes.Letter}>Y</div>
            </div>
            {/*Heading And Content [Social Media Icons]*/}
            <div className={classes.Content}>
                <h1 className={classes.Heading}>Foodify</h1>
                <p>Eat What You Want in any Time and anywhere</p>
                <div className={classes.SocialMedia}>
                    <a target="_blank" rel="noreferrer" href={'https://www.facebook.com/A.sni9er/'} ><img src={FacebookLogo} alt={"Facebook"} /></a>
                    <a target="_blank" rel="noreferrer" href={'https://twitter.com/Sni_9_er'} ><img src={TwitterLogo} alt={"Twitter"} /></a>
                    <a href={'#nothing'} ><img src={GoogleLogo} alt={"Google Plus"} /></a>
                </div>
            </div>
           {/* Logout Button*/}
           <div
                onClick={() => props.onLogout()}
                className={classes.Logout}>
                <img src={LogoutIcon} alt={'Logout'} />
            </div>
        </header>
    )
}
//Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.Logout())
    }
}
//Redux State
const mapStateToProps = (state) => {
    return {
        OrdersNumber: state.Market.Orders.length,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);