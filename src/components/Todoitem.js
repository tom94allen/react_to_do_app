import React, { Component } from 'react';
import PropTypes from 'prop-types';
import remove from '../img/remove.png';


//getStyle method called in style attribute of parent div
//onChange = an event and by using bind we can parse values up the chain
//in order to access state, need to move up to Todos.js and then to App.js as this is where it's stored
//do this using this.props.markComplete and set a prop named markComplete in Todos.js

export class Todoitem extends Component {
    getStyle = () => {
        if(this.props.todos.completed){
            return{
                textDecoration: 'line-through',
            }
        }
        else{
            return{
                textDecoration: 'none',
            }
        }
    }
    render() {
        const {id, title} = this.props.todos;
        return (
            <div style={this.getStyle()} className="flex-container">
                <p className="flex-item">
                    <input type="checkbox" className="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                </p>
                <button className="small-flex-container" id="removeBtn" onClick={this.props.removeTask.bind(this, id)}><img src={remove} alt="remove-btn"/></button>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default Todoitem
