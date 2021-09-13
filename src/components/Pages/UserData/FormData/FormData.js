import React, {useState} from "react";
import classes from './FormData.module.css';

//Imports
import FormInput from "../../../UI/SignupInput/FormInput";
import SignupButton from "../../../UI/SignupButton/SignupButton";
import Spinner from "../../../UI/Spinner/Spinner";

//Libraries Imports
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const FormData = (props) => {

    const [spinnerVisibility, setSpinnerVisibility] = useState(false)
    const [formData, setFormData] = useState({
        User_Name: {
            value: '',
            validation: {
                minLength: 5
            },
            valid: false,
            touched: false,
            errorMessage: 'Name must be at least 5'
        },
        User_Phone: {
            value: '',
            validation: {
                pattern: /^[0-9]{11}$/
            },
            valid: false,
            touched: false,
            errorMessage: 'Phone must be 11 Characters in Egypt'
        },
        User_Birthdate: {
            value: '',
            validation: {},
            valid: false,
            touched: false,
            errorMessage: 'Birthday is Not Valid'
        },
        User_City: {
            value: '',
            validation: {},
            valid: false,
            touched: false,
            errorMessage: 'City is Not Valid'
        },
        User_Address: {
            value: '',
            validation: {
                minLength: 10
            },
            valid: false,
            touched: false,
            errorMessage: 'Address is Not Valid'
        },
        User_Zip: {
            value: '',
            validation: {
                pattern: /^[0-9]{5}$/
            },
            valid: false,
            touched: false,
            errorMessage: 'Zip must be 5 Numbers'
        },
        User_Gender: 'Male',
    });


    // Check of inputs Validation and reset the state
    const inputChanged = (value, id, rules) => {

        let valid = true;
        // check length
        if (rules.minLength) {
            valid = value.trim().length >= rules.minLength && valid;
        }
        // check regex
        if (rules.pattern) {
            valid = value.match(rules.pattern) && valid
        }

        // reset the state
        const state = {
            ...formData,
            [id]: {
                ...formData[id],
                value: value,
                touched: true,
                valid: valid
            }
        }
        setFormData(state)
    }

    const genderChecked = (Value) => {

        const state = {
            ...formData,
            User_Gender: Value
        }

        setFormData(state)

    }

    // FN() Happens when form submit
    const formSubmit = (e) => {
        //preventDefault
        e.preventDefault();
        // const used to check if form is valid
        let formValidity = true;
        // User data Object
        let UserData = {
            User_Gender: formData.User_Gender,
        };
        // Check if form is valid and set user data
        for (let foKey in formData) {
            if (foKey !== 'User_Gender' && foKey !== 'formValid') {
                formValidity = formValidity && formData[foKey].valid;
                UserData[foKey] = formData[foKey].value
            }
        }


        // Send data if form is Valid
        if (formValidity) {
            // Get Local id to save data into it
            const localId = localStorage.getItem('localId');
            // Show Spinner
            setSpinnerVisibility(true);
            // Send request to firebase
            if (localId) {
                axios.put(`https://foodify-b8773-default-rtdb.firebaseio.com/UsersData/${localId}.json?auth=${props.AuthToken}`, UserData)
                    .then(response => {
                        setSpinnerVisibility(false)
                        props.history.push('/');
                    })
                    .catch(error => {
                        setSpinnerVisibility(false)
                    })
            }

        }
    }


    return (
        <form className={classes.Form} onSubmit={(e) => formSubmit(e)}>
            { props.AuthToken === null ? <p className={classes.Error}>You Need To Sign In Before sending Data</p> : null}
            <div className={classes.InputsContainerPart}>
                <FormInput
                    inputPlaceholder={'Full Name'}
                    inputId={'User_Name'}
                    type={'text'}
                    changed={(value, id) => inputChanged(value, id, formData.User_Name.validation)}
                    value={formData.User_Name.value}
                    touched={formData.User_Name.touched}
                    valid={formData.User_Name.valid}
                    errorMessage={formData.User_Name.errorMessage}
                />
                <FormInput
                    inputPlaceholder={'Phone'}
                    inputId={'User_Phone'}
                    type={'tel'}
                    changed={(value, id) => inputChanged(value, id, formData.User_Phone.validation)}
                    value={formData.User_Phone.value}
                    touched={formData.User_Phone.touched}
                    valid={formData.User_Phone.valid}
                    errorMessage={formData.User_Phone.errorMessage}
                />
                <FormInput
                    inputPlaceholder={'Date of Birth'}
                    inputId={'User_Birthdate'}
                    type={'date'}
                    changed={(value, id) => inputChanged(value, id, formData.User_Birthdate.validation)}
                    value={formData.User_Birthdate.value}
                    touched={formData.User_Birthdate.touched}
                    valid={formData.User_Birthdate.valid}
                    errorMessage={formData.User_Birthdate.errorMessage}
                />
                <FormInput
                    inputPlaceholder={'City'}
                    inputId={'User_City'}
                    type={'text'}
                    changed={(value, id) => inputChanged(value, id, formData.User_City.validation)}
                    value={formData.User_City.value}
                    touched={formData.User_City.touched}
                    valid={formData.User_City.valid}
                    errorMessage={formData.User_City.errorMessage}
                />
            </div>
            <div className={classes.GenderContainerPart}>
                <FormInput
                    inputPlaceholder={'Address'}
                    inputId={'User_Address'}
                    type={'text'}
                    changed={(value, id) => inputChanged(value, id, formData.User_Address.validation)}
                    value={formData.User_Address.value}
                    touched={formData.User_Address.touched}
                    valid={formData.User_Address.valid}
                    errorMessage={formData.User_Address.errorMessage}
                />
                <FormInput
                    inputPlaceholder={'Zip Code'}
                    inputId={'User_Zip'}
                    type={'number'}
                    changed={(value, id) => inputChanged(value, id, formData.User_Zip.validation)}
                    value={formData.User_Zip.value}
                    touched={formData.User_Zip.touched}
                    valid={formData.User_Zip.valid}
                    errorMessage={formData.User_Zip.errorMessage}
                />

                <div className={classes.Gender}>
                    <h3>Gender</h3>
                    <div className={classes.RadioContainer}>
                        <div className={classes.InputRadio}>
                            <input
                                onChange={(e) => genderChecked(e.target.value)}
                                checked={formData.User_Gender === 'Male'}
                                id={'GenderMale'}
                                type='radio'
                                name={'gender'}
                                value={'Male'}/>
                            <label htmlFor={'GenderMale'}>Male</label>
                        </div>
                        <div className={classes.InputRadio}>
                            <input
                                onChange={(e) => genderChecked(e.target.value)}
                                checked={formData.User_Gender === 'Female'}
                                id={'GenderFemale'}
                                type='radio'
                                name={'gender'}
                                value={'Female'}/>
                            <label htmlFor={'GenderFemale'}>Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.ButtonContainer}>
                <SignupButton>{spinnerVisibility ? <Spinner mini/> : 'SUBMIT'}</SignupButton>
            </div>
        </form>
    )
}


const mapStateToProps = (state) => {
    return{
        AuthToken: state.Auth.idToken
    }
}


export default connect(mapStateToProps)(withRouter(FormData));