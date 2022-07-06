import React, {Component} from "react";


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