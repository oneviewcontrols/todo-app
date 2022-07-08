import axios from "axios"

class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
     }
 
    //  executeHelloWorldBean() {
    //      return axios.get('http://localhost:8080/hello-world-bean')
    //  }
 
    //  executeHelloWorldPathVariable(name) {
    //      return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    //  }

}

export default new TodoDataService()