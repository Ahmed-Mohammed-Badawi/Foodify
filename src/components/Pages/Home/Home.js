import React, {useEffect, useState} from "react";
import classes from './Home.module.css';
//Imports
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Notes from "./Notes/Notes";
import Footer from "../../UI/Footer/Footer";
import ScrollToTop from "../../UI/ScrolltoTop/ScrolltoTop";
import Market from "./Market/Market";
// Modal Imports
import Modal from "../../UI/Modal/Modal";
import CardDetails from "../../UI/CardDetails/CardDetails";


const Home = () => {

    useEffect(() => {
        // Change Page Title When Component Load
        document.title = 'Home'
    }, []);

    // State of Modal and Card Info
    const [modalStatus, setModalStatus] = useState(false);
    const [cardInfo, setCardInfo] = useState(null)

    // Fn() Happens When Click Card Show Button
    const CardClicked = (cardData) => {
        //Set Cart Data
        setCardInfo(cardData)
        //Show Modal AND Backdrop
        setModalStatus(true)
    }
    // FN() Happens When Click Close Btn Or Backdrop
    const CloseModal = () => {
        //Hide Modal and Backdrop
        setModalStatus(false);
        //Clear Modal Data
        setCardInfo(null)
    }

    return (
        <div className={classes.Home}>
            {/*HEADER*/}
            <Header />
            {/*MENU*/}
            <Menu cardClicked={CardClicked} />
            {/*Contact by message*/}
            <Notes />
            {/*Footer*/}
            <Footer />
            {/*ScrollToTop*/}
            <ScrollToTop />
            {/*Market Button*/}
            <Market />
            {/*Modal*/}
            <Modal
                // Modal Show Status
                show={modalStatus}
                // Close Modal Fn()
                close={CloseModal}>
                {/*Render Card Data after Confirm that there are Data*/}
                {cardInfo
                    ?
                    <CardDetails
                        MealName={cardInfo.mealName}
                        MealPrice={cardInfo.mealPrice}
                        MealIngredients={cardInfo.ingredients}
                    />
                    // Message Well Be Shown If There are No Data
                    : <p>There Are No Data Yet</p>}
            </Modal>
        </div>
    )
}

export default Home;