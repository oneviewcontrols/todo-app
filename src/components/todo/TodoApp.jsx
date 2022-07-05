import React, {Component, isValidElement} from "react";
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import withNavigation from "./WithNavigation";


class TodoApp extends Component {


    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        return (
                <div className="TodoApp">
                    <Router>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                            <Route path="/welcome" element={<WelcomeComponent />} />
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Routes>
                    </Router>
                </div>
        );

    }

}


class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }

    loginClicked() {
        if (this.state.username ==='ansancle' & this.state.password==='password') {
            this.props.navigate(`/welcome`)
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    
    }

        
    

    // handleUserNameChange(event) {
    //     this.setState({username : event.target.value})
    // }

    // handlePasswordChange(event) {
    //     this.setState({password : event.target.value})
    // }

    render() {
        return (
            <div className="LoginComponent">
                <div hidden={!this.state.hasLoginFailed}>Invalid Credentials</div>
                <div hidden={!this.state.showSuccessMessage}>Login Sucessful</div>
               User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
               Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
               <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div> Welcome ansancle</div>
        );
    }
}

function ErrorComponent() {
    return <div>An Error Occurred</div>
}


export default TodoApp;

