import React, {Component} from "react";
import classes from '../Signup/Signup.module.css';
// Libraries Imports
import {NavLink} from "react-router-dom";
// Components Imports
import LogoForm from "../../UI/LogoForm/LogoForm";
import FormInput from "../../UI/SignupInput/FormInput";
import SignupButton from "../../UI/SignupButton/SignupButton";
import Spinner from "../../UI/Spinner/Spinner";
// Redux Imports
import {connect} from "react-redux";
import * as actions from "../../../store/Actions/allActions";


class Login extends Component {

    state = {
        formData: {
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
        }
    }


    componentWillUnmount() {
        // clear the error message
        this.props.clearError()
    }


    // function to check validity & change input value in state and make input touched
    inputChanged = (value, id, rules) => {
        let valid = true;

        if (rules.pattern) {
            valid = value.match(rules.pattern) && valid
        }

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
        })
    }

    render() {
        return (

            <div className={classes.Container}>
                {/*Logo in Form*/}
                <LogoForm/>
                {/*Right Part*/}
                <div className={classes.PinkArea}>
                    <h1>Login</h1>
                    <div className={classes.Message}>
                        <p>Welcome</p>
                        <p>In</p>
                        <p>Our Family</p>
                    </div>
                </div>
                {/*Form Part*/}
                <div className={classes.FormContainer}>
                    <form
                        // This For test purpose Change it when you finish
                        onSubmit={(event) => {
                            event.preventDefault();
                            this.props.onLogin();
                        }}
                        className={classes.FormArea}>

                        {this.props.error ? <div className={classes.PublicError}>{
                            this.props.error === 'Request failed with status code 400' ?
                                'Something Went Wrong' : this.props.error
                        }</div>: null}

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
                            <NavLink
                                to={'/Signup'}
                                className={classes.LoginLink}
                            >
                                SIGNUP &rarr;
                            </NavLink>
                            <SignupButton
                                style={{textTransform: 'Uppercase'}}
                                clicked={(event) => {
                                    event.preventDefault();

                                    if (this.state.formData.Email.valid && this.state.formData.Password.valid) {
                                        this.props.onLogin({
                                            email: this.state.formData.Email.value,
                                            password: this.state.formData.Password.value
                                        }, 'Login')
                                    }

                                }}
                            >
                                {this.props.loading ? <Spinner mini/> : 'Login'}
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

// Redux State
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (Data, ActionType) => dispatch(actions.SignupStart(Data, ActionType)),
        clearError: () => dispatch(actions.ClearError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);