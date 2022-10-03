import React, { useEffect, useState } from 'react';
import logo from '../images/player-1.png';
import './Cart.css';

const Cart = ({ cart }) => {
    
    console.log(cart);
    let total = 0;
    for (const product of cart) {
        total = total + product.time;
    }

    const [value, setValue] = useState(0);
    const handleOnClick = (e) => {
        const isSetValue = e.target.value;
        setValue(e.target.value);
    };

    return (
        <div className='cart'>
            <div className="profile-info">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h4>Jihad Hasan Dipu</h4>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
                <div>
                    <h4>Details</h4>
                    <h4>Add a Break(s)</h4>
                    <div className='break-time'>
                        <div className='break-btn'>
                            <input type="button" name="" value="10" onClick={handleOnClick}/>
                        </div>
                        <div className='break-btn'>
                            <input type="button" name="" value="20" onClick={handleOnClick}/>
                        </div>
                        <div className='break-btn'>
                            <input type="button" name="" value="30" onClick={handleOnClick}/>
                        </div>
                        <div className='break-btn'>
                            <input type="button" name="" value="40" onClick={handleOnClick}/>
                        </div>
                        <div className='break-btn'>
                            <input type="button" name="" value="50" onClick={handleOnClick}/>
                        </div>
                    </div>
                    <p>Selected items: {cart.length}</p>
                    <p>Exercise time: {total} seconds</p>
                    <p>Break time: {value} seconds</p>
                </div>
                <button className='activity-btn'>Activity Completed!</button>
            </div> 
        </div>
    );
};

export default Cart;