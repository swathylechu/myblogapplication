import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
function Navbar(props) {
    return (
        
            <nav className='navbar'>
                <h1 className='head'>Swathy's  Blog</h1>
                <div>
                  <Link className="link" to="/Login">Login</Link> 
                  <Link  className="link" to="/signup">signup</Link>
                  <Link  className="link" to="/About">About</Link>
                  </div>
                
            </nav>
            
        
    );
}

export default Navbar;