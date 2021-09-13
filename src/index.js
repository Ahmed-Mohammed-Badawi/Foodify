import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react router
import {BrowserRouter} from "react-router-dom";
/*
    [1] - createStore for making a store for redux
    [2] - applyMiddleware for using react thunk for async actions
    [3] - compose for redux extension
 */
import {createStore, combineReducers,applyMiddleware, compose} from "redux";
// Provider for connecting React with Redux
import {Provider} from 'react-redux';
// thunk for making async actions
import thunk from "redux-thunk";
// reducers
import authenticationReducer from "./store/Reducers/AuthenticationReducer";
import HomeReducer from "./store/Reducers/HomeReducer";
import MarketReducer from "./store/Reducers/MarketReducer";
// for redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Combining Reducers
const mainReducer = combineReducers({
    Auth: authenticationReducer,
    Home: HomeReducer,
    Market: MarketReducer
})

// store for making react store
const store = createStore(mainReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    <React.StrictMode>
        {/*Provider for redux*/}
        <Provider store={store}>
            {/*Browser router for react-router*/}
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
