import React from 'react'
import './navbar.css'
import logo from './logo192.png';

class Navbar extends React.Component{
    render(){
        
        return(
            <>
            
            <nav>
            
              <ul>
              <img src={logo} alt="Logo" width={50} />
              <div className='navBar'>
                <li>Home</li>
                <li>about</li>
                <li>service</li>
                <li>Contact</li>
                </div>
              </ul>
            </nav>
            
            </>
        );
    }
}
export default Navbar;

