import React, { useEffect, useState } from 'react';
import Toast from '../Toast/Toast'; 
import logo from '../images/player-1.png';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;

        localStorage.setItem("Total Exercise Time", JSON.stringify(total));
    }

    const [value, setValue] = useState(0);
    const handleOnClick = (e) => {
        const isSetValue = e.target.value;
        setValue(e.target.value);
        localStorage.setItem("breaktime", JSON.stringify(isSetValue));
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
                    <p>Selected items: {quantity}</p>
                    <p>Exercise time: {total} seconds</p>
                    <p>Break time: {value} seconds</p>
                </div>
                <Toast></Toast>
            </div> 
        </div>
    );
};

export default Cart;