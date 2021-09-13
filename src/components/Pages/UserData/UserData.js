import React, {useEffect} from "react";
import classes from './UserData.module.css';


//Imports
import Line from "./Line/Line";
import ImgContainer from "./ImgContainer/ImgContainer";
import FormData from "./FormData/FormData";

const UserData = () => {

    useEffect(() => {
        // Change title when Component Load
        document.title = 'User Data'
    }, []);

    return (
        <div className={classes.Container}>
            <Line/>
            <Line/>
            <div className={classes.GridContainer}>
                <ImgContainer/>
                <FormData />
            </div>
        </div>
    );
}

export default UserData;