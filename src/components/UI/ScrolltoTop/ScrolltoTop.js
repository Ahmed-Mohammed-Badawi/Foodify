import React, {useState, useEffect} from "react";
import classes from './ScrolltoTop.module.css';

const ScrollToTop = () => {

    //Visibility state
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // check if the page offset allow to make button visible
        const checkVisibility = () => {
            if (window.pageYOffset > 500) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        // add event to window for check the height
        window.addEventListener('scroll', checkVisibility);
        // remove the event when the components unmount
        return () => window.removeEventListener('scroll', checkVisibility)

    }, [])

    // scroll to To smoothly fn()
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    //check if btn is visible to show or not
    const scrollButton = visible ? <button onClick={scroll} className={classes.ScrollButton}>&uarr;</button> : null;

    return scrollButton

}

export default React.memo(ScrollToTop);