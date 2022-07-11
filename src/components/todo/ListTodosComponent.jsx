import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }

    componentWillUnmount() {
        
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                this.setState({
                    todos : response.data
                })
            }
        )
    }


    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="25%" align="center">Description</th>
                                <th width="40%" align="center">Target Date</th>
                                <th width="25%" align="center">Is Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>                                     
                                    </tr>
                                )
                            }   
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ListTodosComponent