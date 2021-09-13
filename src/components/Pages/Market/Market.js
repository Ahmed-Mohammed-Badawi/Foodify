import React, {useEffect} from "react";
import classes from './Market.module.css';
// Imports
import SearchBar from "./SearchBar/SearchBar";
import FilterBar from "./FilterBar/FilterBar";
import Content from "./Content/Content";
import Footer from "../../UI/Footer/Footer";
import ScrollToTop from "../../UI/ScrolltoTop/ScrolltoTop";

const Market = () => {

    useEffect(() => {
        document.title = 'Market'
    }, []);


    return (
        <div className={classes.Container}>
            {/*SearchBar*/}
            <SearchBar />
            {/*FilterBar*/}
            <FilterBar />
            {/*Content*/}
            <Content />
            {/*Footer*/}
            <Footer />
            {/*Scroll to top*/}
            <ScrollToTop />
        </div>
    )
}

export default Market;