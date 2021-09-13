import './App.css';
import React,{useEffect} from "react";
// Libraries Imports
import {Switch, Route} from "react-router-dom";
import {Redirect} from "react-router-dom/cjs/react-router-dom";
// Ui Extensions Imports
import MouseCircle from "./components/UI/MouseCircle/MouseCircle";
// redux Imports
import {connect} from "react-redux";
import * as actions from './store/Actions/allActions';
// Components Imports with lazy import
const Signup = React.lazy(() => import("./components/Pages/Signup/Signup"));
const Login = React.lazy(() => import("./components/Pages/Login/Login"));
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const Market = React.lazy(() => import('./components/Pages/Market/Market'));
const UserData = React.lazy(() => import('./components/Pages/UserData/UserData'));
const Checkout = React.lazy(() => import('./components/Pages/Checkout/Checkout'));


function App(props) {

    const onLoad = props.onPageLoad;
    useEffect(() => {
        onLoad()
    }, [onLoad])

    let Where_to_go = <Redirect to='/Login' />

    if (props.Authenticated && props.AuthType === 'Signup'){
        Where_to_go = <Redirect to='/Userdata' />
    }else if (props.Authenticated && props.AuthType === 'Login'){
        Where_to_go = <Redirect to='/' />
    }else {
        Where_to_go = <Redirect to='/Login' />
    }


    return (
        <div className="App">
            {/*Mouse Circle*/}
            {/*check screen width th show or hide the mouse Circle*/}
            {window.innerWidth < 768 || 'ontouchstart' in document.documentElement ? null : <MouseCircle/>}
            {/*Redirect to login Page if it's not Authenticated*/}
            {Where_to_go}
            {/*Suspense For Lazy Loading*/}
            <React.Suspense fallback={`<span>Loading....</span>`}>
                <Switch>
                    <Route
                        path={'/Userdata'}
                        component={UserData}
                        exact
                    />
                    <Route
                        path={'/Checkout'}
                        component={Checkout}
                        exact
                    />
                    <Route
                        path={'/Market'}
                        component={Market}
                        exact
                    />
                    <Route
                        path={'/Login'}
                        component={Login}
                        exact
                    />
                    <Route
                        path={'/Signup'}
                        component={Signup}
                        exact
                    />
                    <Route
                        path={'/'}
                        component={Home}
                        exact
                    />
                    <Route
                        path={'*'}
                        component={Home}
                    />
                </Switch>
            </React.Suspense>
        </div>
    );
}

//Redux Actions
const mapDispatchToProps = (dispatch) => {
    return {
        onPageLoad: () => dispatch(actions.checkOnLoadAuthenticationState())
    }
}
// Redux State
const mapStateToProps = (state) => {
    return {
        Authenticated: state.Auth.idToken !== null,
        AuthType: state.Auth.AuthType,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
