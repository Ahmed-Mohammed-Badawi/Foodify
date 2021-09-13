import React, {useEffect} from "react";
import classes from './Home.module.css';
//Imports
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Notes from "./Notes/Notes";
import Footer from "../../UI/Footer/Footer";
import ScrollToTop from "../../UI/ScrolltoTop/ScrolltoTop";
import Market from "./Market/Market";


const Home = () => {

    useEffect(() => {
        document.title = 'Home'
    }, []);


    return (
        <div className={classes.Home}>
            {/*HEADER*/}
            <Header />
            {/*MENU*/}
            <Menu />
            {/*Contact by message*/}
            <Notes />
            {/*Footer*/}
            <Footer />
            {/*ScrollToTop*/}
            <ScrollToTop />
            {/*Market Button*/}
            <Market />
        </div>
    )
}

export default Home;