import React from 'react';
import {Link} from 'react-router-dom';

function Header (){
    return(
            <header className="headerContainer">
                <h1 id="header">Todo List</h1>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </header>
    )
}

export default Header;

