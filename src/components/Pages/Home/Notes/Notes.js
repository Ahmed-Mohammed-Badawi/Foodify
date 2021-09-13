import React, {useState} from "react";
import classes from './Notes.module.css';
//Imports
import CardButton from "../../../UI/CardButton/CardButton";
import FormInput from "../../../UI/SignupInput/FormInput";
import TextArea from "./textArea/textArea";
import JudgeImg from '../../../../assets/images/judge.webp';
import Spinner from "../../../UI/Spinner/Spinner";
// Libraries Imports
import {connect} from "react-redux";
import * as actions from '../../../../store/Actions/allActions';

const Notes = (props) => {

    // Custom Styles for Form
    const inputStyle = {
        borderRadius: '0',
        backgroundColor: 'White'
    }

    const labelStyle = {
        backgroundColor: 'var(--mainColor)',
        fontSize: '1.5rem'
    }

    const buttonStyle = {
        width: '100%',
        padding: '1rem',
        marginTop: '1.5rem',
        fontFamily: 'var(--mainFont)'
    }

    // State of form data
    const [formData, setFormData] = useState({
        Objection_Name: {
            value: '',
            validation: {
                minLength: 5
            },
            valid: false,
            touched: false,
            errorMessage: 'Name must be at least 5'
        },
        Objection_Email: {
            value: '',
            validation: {
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            valid: false,
            touched: false,
            errorMessage: 'Email is Not Valid'
        },
        Objection_Text: {
            value: '',
            validation: {
                minLength: 10
            },
            valid: false,
            touched: false,
            errorMessage: 'Message must be more than 10'
        }
    })

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

    // When form Submit
    const onFormSubmit = (event) => {
        // Don't Re;oad
        event.preventDefault();
        // check if inputs are valid
        if (formData.Objection_Name.valid && formData.Objection_Email.valid && formData.Objection_Text.valid) {
            //send data in action to reducer
            props.formSubmit({
                Name: formData.Objection_Name.value,
                Email: formData.Objection_Email.value,
                Message: formData.Objection_Text.value
            });

            // Clear the form
            const resetData = {
                ...formData,
                Objection_Name: {
                    ...formData["Objection_Name"],
                    value: '',
                    touched: false,
                    valid: false
                },
                Objection_Email: {
                    ...formData["Objection_Email"],
                    value: '',
                    touched: false,
                    valid: false
                },
                Objection_Text: {
                    ...formData["Objection_Text"],
                    value: '',
                    touched: false,
                    valid: false
                },
            }

            setFormData(resetData)
        }
    }


    return (
        <section className={classes.Notes}>
            <h2 className={classes.Heading_2}>Do You Have Notes ?</h2>

            <div className={classes.ContentContainer}>
                <div className={classes.FormContainer}>
                    <form onSubmit={(event) => onFormSubmit(event)}>
                        <FormInput
                            value={formData.Objection_Name.value}
                            changed={(value, id) => inputChanged(value, id, formData.Objection_Name.validation)}
                            touched={formData.Objection_Name.touched}
                            valid={formData.Objection_Name.valid}
                            errorMessage={formData.Objection_Name.errorMessage}
                            inputStyle={inputStyle}
                            labelStyle={labelStyle}
                            inputtype={'text'}
                            inputPlaceholder={'Name'}
                            inputId={'Objection_Name'}/>
                        <FormInput
                            value={formData.Objection_Email.value}
                            changed={(value, id) => inputChanged(value, id, formData.Objection_Email.validation)}
                            touched={formData.Objection_Email.touched}
                            valid={formData.Objection_Email.valid}
                            errorMessage={formData.Objection_Email.errorMessage}
                            inputStyle={inputStyle}
                            labelStyle={labelStyle}
                            inputtype={'email'}
                            inputPlaceholder={'Email'}
                            inputId={'Objection_Email'}/>
                        <TextArea
                            value={formData.Objection_Text.value}
                            touched={formData.Objection_Text.touched}
                            valid={formData.Objection_Text.valid}
                            errorMessage={formData.Objection_Text.errorMessage}
                            changed={(value, id) => inputChanged(value, id, formData.Objection_Text.validation)}
                        />
                        <CardButton buttonStyle={buttonStyle}>{props.ObjectionLoading ?
                            <Spinner mini/> : 'GO AHEAD'}</CardButton>
                    </form>
                </div>
                <div className={classes.ShapesContainer}>
                    <div className={classes.CircleContainer}>
                        <img src={JudgeImg} alt={'Judge Hammer'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Redux State
const mapStateToProps = (state) => {
    return {
        ObjectionLoading: state.Home.ObjectionLoading
    }
}
// Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        formSubmit: (Data) => dispatch(actions.ObjectionFormSubmit(Data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);