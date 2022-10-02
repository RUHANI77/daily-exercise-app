import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className="title">
                    <h1>Daily Exercise App</h1>
                    <h3>Select today's exercise Now!</h3>
                </div>
            </nav>
        </div>
    );
};

export default Header;