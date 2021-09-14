import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import classes from './Market.module.css';

const MarketButton = (props) => {

    // Check Market Btn Visibility
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Check if page offset allow to show the Button
        const checkVisibility = () => {
            if (window.pageYOffset > 350) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        //add event scroll to window
        window.addEventListener('scroll', checkVisibility);
        // remove event when component unmount
        return () => window.removeEventListener('scroll', checkVisibility)

    }, [])

    // Go to Market Link
    const goToMarket = () => {
        props.history.push('/Market')
    }

    // If visible show btn else no
    const MarketButton = visible ? <button onClick={goToMarket} className={classes.MarketButton}>&#43;</button> : null;

    return MarketButton

}

//Add router props to component
export default React.memo(withRouter(MarketButton));