import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

//Todos component has a prop defined as markComplete in App.js file, again parsing this up 
// the chain so that the state object can be accessed and change on an event in Todoitem.js
class Todos extends Component{
render(){
    return this.props.todos.map((task) =>(
        <Todoitem key = {task.id} todos = {task} markComplete = {this.props.markComplete} removeTask = {this.props.removeTask}/>
    ));
    }
    
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
  
export default Todos;