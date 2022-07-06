import React, {Component, isValidElement} from "react";
import {BrowserRouter as Router,Route, Routes, Link, Navigate } from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return (
            <div> 
                <h1>Welcome</h1>
                    <div className="container">
                        Welcome {this.props.params.name}. Manage Todos <Link to="/todos">Here</Link>
                    </div>
            </div>
        );
    }
}
export default WelcomeComponent