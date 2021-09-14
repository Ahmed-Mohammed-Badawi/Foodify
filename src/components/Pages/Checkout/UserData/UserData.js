import React, {useEffect, useState} from "react";
import classes from './UserData.module.css';

//Imports
import BackImg from '../../../../assets/images/share-option.svg';
import VictorImg from '../../../../assets/images/Owner.jpg';
import SignupButton from "../../../UI/SignupButton/SignupButton";

//Libraries Imports
import * as actions from '../../../../store/Actions/allActions';
import {NavLink} from "react-router-dom";
import {storage} from "../../../../firebase";
import axios from "axios";
import {connect} from "react-redux";


const UserData = (props) => {

    // Data and Img State of User
    const [userImg, setUserImg] = useState(VictorImg);
    const [userData, setUserData] = useState(null);

    // get the image when it load
    useEffect(() => {
        // get the folder reference which localId
        const imgRef = storage.ref(`${props.localId}`);
        // get all items inside folder
        imgRef.listAll().then(res => {
            // Loop through items [images]
            res.items.forEach(item => {
                item.getDownloadURL().then(url => {
                    setUserImg(url)
                })
            })
        });

    }, [props.localId]);

    // get User Data When it Load
    useEffect(() => {
        axios.get(`https://foodify-b8773-default-rtdb.firebaseio.com/UsersData/${props.localId}.json?auth=${props.token}`)
            .then(response => {
                setUserData(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, [props.localId, props.token])


    // Variable to set User data into it
    let userInformation;
    // Check to decide What content Should Show
    if (userData === null) {
        // Link to SignOut and Go to Login Page
        userInformation = (<NavLink
            onClick={props.logout}
            style={{
                color: 'var(--mainColor)'
            }}
            to={'/Login'}>Login To Continue &rarr;</NavLink>)
    } else {
        userInformation = (
            <div className={classes.UserShippingInfo}>
                {/*User Info get from server when Component Load*/}
                <h2>{userData.User_Name}</h2>
                <p><span>City :</span> {userData.User_City}</p>
                <p><span>Address :</span> {userData.User_Address}</p>
                <p><span>Phone :</span> {userData.User_Phone}</p>
                <p><span>Zip :</span> {userData.User_Zip}</p>
                {/*Edit Link to Edit User Data*/}
                <NavLink
                    style={{
                        color: 'var(--mainColor)'
                    }}
                    to={'/Userdata'}>Edit &rarr;</NavLink>
            </div>
        );
    }


    return (
        <section className={classes.UserData}>
            {/*Back Button*/}
            <div
                onClick={() => window.history.back()}
                className={classes.BackOption}>
                <img src={BackImg} alt={'Go Back'}/>
            </div>

            {/*Shipping To Message*/}
            <p className={classes.ShippingMessage}>Shipping to</p>
            {/*User Image*/}
            <div className={classes.UserImg}>
                <img src={userImg} alt={'Victor Owner'}/>
            </div>
            {/*User Data*/}
            {userInformation}
            {/*Continue Shipping*/}
            {userData && props.Orders ? <div className={classes.ButtonContainer}>
                <SignupButton clicked={() => alert('Order Has Done')}>Go Ahead</SignupButton>
            </div> : null}
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.Logout())
    }
}

const mapStateToProps = (state) => {
    return {
        localId: state.Auth.localId,
        token: state.Auth.idToken,
        Orders: state.Market.Orders.length > 0
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserData);