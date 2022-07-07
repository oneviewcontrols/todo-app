import React, {Component} from "react";
import {Link } from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            title : 'Welcome',
            welcomeMessage : '',
            errorMessage : ''
        }
    }   

    render() {
        return (
            <div> 
                <h1>{this.state.title}</h1>
                <div className="container">
                        {this.state.errorMessage}
                    </div>
                    <div className="container">
                        Welcome {this.props.params.name}. Manage Todos <Link to="/todos">Here</Link>
                    </div>
                    <div className="container">
                        Click here to get welcome message<br/>
                        <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
                    </div>
                    <div className="container">
                        {this.state.welcomeMessage}
                    </div>
            </div>
        );
    }

    retrieveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(error => this.handleError(response))

        // HelloWorldService.executeHelloWorldBean()
        // .then(response => this.handleSuccessfulResponse(response))
        // .catch(error => this.handleError(error))

        HelloWorldService.executeHelloWorldPathVariable(this.props.params.name)
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
        
    }

    handleSuccessfulResponse(response) {
        this.setState({
            welcomeMessage: response.data.message,
            title : 'Welcome',
            errorMessage : ''
        })
    }

    handleError(error) {
        this.setState({
            errorMessage: error.message,
            title : "Error"
        })
    }

}
export default WelcomeComponent
