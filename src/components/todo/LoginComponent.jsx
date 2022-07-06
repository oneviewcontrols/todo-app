import React, {Component, isValidElement} from "react";
import AuthenticationService from "./AuthenticationService.js";



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
        if (this.state.username ==='ansancle' & this.state.password ==='password') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.setState({hasLoginFailed:false})
            this.props.navigate(`/welcome/${this.state.username}`)
        } else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                <div className="alert alert-warning" hidden={!this.state.hasLoginFailed}>Invalid Credentials</div>
                {/* <div hidden={!this.state.showSuccessMessage}>Login Sucessful</div> */}
               User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
               Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
               <button style={{marginLeft: 10 + 'px'}}  className="btn btn-success" onClick={this.loginClicked}>Login</button>
               </div>
            </div>
        );
    }
}

export default LoginComponent