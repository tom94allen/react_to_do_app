import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Searchbar from './components/Searchbar';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';


class App extends Component{
state = {
  todos:[]
}

componentDidMount( ){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then( res => this.setState({todos: res.data}));
}
//removes a task if delete button is pressed
removeTask = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  // var newAry = [...this.state.todos];
  // for(var i = 0; i < newAry.length; i++){
  //   if(newAry[i].id === id){
  //     newAry.splice(i, 1);
  //   }
  // }
  // this.setState({todos:newAry})
}
// marks todo completed property to the opposite of the current boolean value
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })});
}

addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title: title,
    completed: false
  })
    .then(res => this.setState({todos: [...this.state.todos, res.data]}));
}
render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Searchbar addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete = {this.markComplete} removeTask = {this.removeTask}/>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}
}
  

export default App;
