import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className="title">
                    <FontAwesomeIcon icon={faPersonWalking} size="2x"></FontAwesomeIcon>
                    <h1 className='title-icon'>Daily Exercise App</h1>
                    
                </div>
                <h3>Select today's exercise Now!</h3>
            </nav>
        </div>
    );
};

export default Header;