import React, {Component, isValidElement} from "react";

class TodoApp extends Component {


    render() {
        return (

            <div className="TodoApp">
                <LoginComponent/>
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
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
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
                <div name="invalid" hidden={!this.state.hasLoginFailed}>Invalid Credentials</div>
                <div name="valid" hidden={!this.state.showSuccessMessage}>Login Sucessful</div>
               User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
               Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
               <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}



export default TodoApp;

