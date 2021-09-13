import React, {Component} from "react";
import classes from './Signup.module.css';
// Libraries Imports
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
// Components Imports
import LogoForm from "../../UI/LogoForm/LogoForm";
import FormInput from "../../UI/SignupInput/FormInput";
import SignupButton from "../../UI/SignupButton/SignupButton";
import Spinner from "../../UI/Spinner/Spinner";

import * as actions from '../../../store/Actions/allActions';


class Signup extends Component {

    state = {
        formData: {
            FullName: {
                value: '',
                validation: {
                    minLength: 5
                },
                valid: false,
                touched: false,
                errorMessage: 'Name must be at least 5'
            },
            Email: {
                value: '',
                validation: {
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
                valid: false,
                touched: false,
                errorMessage: 'Email is Not Valid'
            },
            Password: {
                value: '',
                validation: {
                    pattern: /^([a-zA-Z@#$%^&*]+)?[0-9]{8,}([a-zA-Z@#$%^&*]+)?$/
                },
                valid: false,
                touched: false,
                errorMessage: 'Password must be Stronger'
            }
        },
    }



    componentWillUnmount() {
        //Clear The Error message
        this.props.clearError()
    }

    // Check the inputs Validation
    inputChanged = (value, id, rules) => {

        let valid = true;

        // check length
        if (rules.minLength) {
            valid = value.trim().length >= rules.minLength && valid;
        }
        // check regex
        if (rules.pattern) {
            valid = value.match(rules.pattern) && valid
        }

        // reset the state of the input
        this.setState({
            formData: {
                ...this.state.formData,
                [id]: {
                    ...this.state.formData[id],
                    value: value,
                    valid: valid,
                    touched: true
                }
            }
        });
    }


    render() {
        return (

            <div className={classes.Container}>
                {/*Logo in Form*/}
                <LogoForm/>
                {/*Right Part*/}
                <div className={classes.PinkArea}>
                    <h1>Signup</h1>
                    <div className={classes.Message}>
                        <p>Make Us Happy</p>
                        <p>&</p>
                        <p>Be One Of Us</p>
                    </div>
                </div>
                {/*Form Part*/}
                <div className={classes.FormContainer}>
                    <form className={classes.FormArea}>
                        {this.props.error
                            ? <div className={classes.PublicError}>
                                {this.props.error === "Request failed with status code 400" ?
                                    "Email is already exist"
                                    : null}
                            </div>
                            : null}
                        <FormInput
                            changed={(value, id) => this.inputChanged(value, id, this.state.formData.FullName.validation)}
                            value={this.state.formData.FullName.value}
                            errorMessage={this.state.formData.FullName.errorMessage}
                            touched={this.state.formData.FullName.touched}
                            valid={this.state.formData.FullName.valid}
                            type={'text'}
                            inputId={'FullName'}
                            inputPlaceholder={'FullName'}/>
                        <FormInput
                            changed={(value, id) => this.inputChanged(value, id, this.state.formData.Email.validation)}
                            value={this.state.formData.Email.value}
                            errorMessage={this.state.formData.Email.errorMessage}
                            touched={this.state.formData.Email.touched}
                            valid={this.state.formData.Email.valid}
                            type={'email'}
                            inputId={'Email'}
                            inputPlaceholder={'Email'}/>
                        <FormInput
                            changed={(value, id) => this.inputChanged(value, id, this.state.formData.Password.validation)}
                            value={this.state.formData.Password.value}
                            errorMessage={this.state.formData.Password.errorMessage}
                            touched={this.state.formData.Password.touched}
                            valid={this.state.formData.Password.valid}
                            type={'password'}
                            inputId={'Password'}
                            inputPlaceholder={'Password'}/>
                        {/*Bottom Part [Btn & loginLink]*/}
                        <div className={classes.ButtonsArea}>
                            {/*Link to go to Login Page*/}
                            <NavLink
                                to={'/Login'}
                                className={classes.LoginLink}
                            >
                                LOGIN &rarr;
                            </NavLink>
                            <SignupButton
                                style={{textTransform: 'Uppercase'}}
                                clicked={(event) => {
                                    event.preventDefault();
                                    if (this.state.formData.FullName.valid && this.state.formData.Email.valid && this.state.formData.Password.valid) {
                                        this.props.onSignUp({
                                            email: this.state.formData.Email.value,
                                            password: this.state.formData.Password.value
                                        }, 'Signup')
                                    } else {

                                    }
                                }}
                            >
                                {this.props.loading ? <Spinner mini/> : `Signup`}
                            </SignupButton>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

//Redux Actions
const mapStateToProps = (state) => {
    return {
        loading: state.Auth.loading,
        error: state.Auth.error
    }
}
//Redux State
const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (Data, ActionType) => dispatch(actions.SignupStart(Data, ActionType)),
        clearError: () => dispatch(actions.ClearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);