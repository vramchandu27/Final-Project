import React from 'react'
import headerclass from '../CSS/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="header">
                <h1 className='header_title'>Investec</h1>
                <ul className="header__ul">
                    <li><Link to="/Account">Open Digital A/C</Link></li>
                    <li><Link to="/Contact">Contact-us</Link></li>
                    <li><Link to="/Help">Help</Link></li>
                    <li><Link to="/Signup">Create-Account</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        </div>
    )
}


export default Header;