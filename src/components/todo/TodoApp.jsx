import React, {Component, isValidElement} from "react";
import {BrowserRouter as Router,Route, Routes, Link } from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";


class TodoApp extends Component {


    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
                <div className="TodoApp">
                    <Router>
                        <HeaderComponent/>
                        <Routes>
                            <Route path="/" element={<LoginComponentWithNavigation />} />
                            <Route path="/login" element={<LoginComponentWithNavigation />} />
                            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                            <Route path="/todos" element={<ListTodosComponent />} />
                            <Route path="/logout" element={<LogoutComponent />} />
                            <Route path="*" element={<ErrorComponent/>}/>
                        </Routes>
                        <FooterComponent/>
                    </Router>                    
                </div>
        );

    }

}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="www.weather.com" className="navbar-brand">First Link</a></div>
                    <ul className="navbar-nav">
                        <li ><Link className="nav-link" to="/welcome/ansancle">Home</Link></li>
                        <li ><Link className="nav-link" to="/todos">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li ><Link className="nav-link" to="/login">Login</Link></li>
                        <li ><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">
                    Copyright Text
                </span>
            </footer>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you
                </div>
            </div>
        )
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
            this.props.navigate(`/welcome/${this.state.username}`)
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

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                {id: 1, description: 'Learn React', done: false,targetDate: new Date()},
                {id: 2, description: 'Learn Spring', done: false,targetDate: new Date()},
                {id: 3, description: 'Learn XXXX', done: false,targetDate: new Date()}
                   ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table width="100%" align="center">
                    <thead>
                        <tr>
                            <th width="15%" align="center">Id</th>
                            <th width="25%" align="center">Description</th>
                            <th width="40%" align="center">Target Date</th>
                            <th width="25%" align="center">Is Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.todos.map(
                            todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                     <td>{todo.description}</td>
                                     <td>{todo.targetDate.toString()}</td>
                                     <td>{todo.done.toString()}</td>                                     
                                </tr>
                            )
                        }   
                    </tbody>
                </table>
            </div>
        );
    }
}


class WelcomeComponent extends Component {
    render() {
        return (
            <div> 
                Welcome {this.props.params.name}. Manage Todos <Link to="/todos">Here</Link>
            </div>
        );
    }
}

function ErrorComponent() {
    return <div>An Error Occurred</div>
}


export default TodoApp;

