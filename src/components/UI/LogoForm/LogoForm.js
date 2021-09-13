import React from "react";
import classes from './LogoForm.module.css';

import BurgerLogo from '../../../assets/images/Burger-Logo.svg';

const LogoForm = () => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt={"Burger Logo"} title={'Logo'}/>
    </div>
);

export default LogoForm;