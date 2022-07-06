import React, {Component, isValidElement} from "react";
import {BrowserRouter as Router,Route, Routes, Link, Navigate } from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import AuthenticationService from "./AuthenticationService.js";
import LoginComponent from "./LoginComponent"
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";

const PrivateRoute = ({ children }) => {
    const authed = AuthenticationService.isUserLoggedIn() // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/Login" />;
  }


class TodoApp extends Component {


    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        return (
                <>
                    <Router>
                        <HeaderComponentWithNavigation/>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                            <Route path="/welcome/:name" element={
                                <PrivateRoute>
                                <WelcomeComponentWithParams />
                                </PrivateRoute>
                            } /> 
                            <Route path="/todos" element={
                                <PrivateRoute>
                                <ListTodosComponent />
                                </PrivateRoute>
                            } />
                            <Route path="/logout" element={
                                <PrivateRoute>
                                <LogoutComponent />
                                </PrivateRoute>
                            } />

                            <Route path="*" element={<ErrorComponent/>}/>
                        </Routes>
                        <FooterComponent/>
                    </Router>                    
                </>
        );

    }

}



export default TodoApp;

