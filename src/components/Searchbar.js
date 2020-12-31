import React, { Component } from 'react';
import add from '../img/add.png';

export class Searchbar extends Component{
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="addBar">
                    <input type="text" name="title" id="addInput" placeholder="Enter task name here..." onChange={this.onChange} value={this.state.title}/>
                    <button type="submit" id="addBtn" ><img src={add} id="addImg" alt="add-button" /></button>
                </div>
            </form>
        )

    }
}

export default Searchbar