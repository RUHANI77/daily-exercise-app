import React from 'react';
import logo from '../images/player-1.png';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div>
            <div className="profile-info">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h4>Jihad Hasan Dipu</h4>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
                <div>
                    <h4>Add a Break</h4>
                    <div className='break-time'>
                        <button>10m</button>
                        <button>20m</button>
                        <button>30m</button>
                        <button>40m</button>
                        <button>50m</button>
                    </div>
                    <h4>Details</h4>
                    <p>Selected items: {cart.length}</p>
                    <p>Exercise time:</p>
                    <p>Break time:</p>
                </div>
                <button className='activity-btn'>Activity Completed!</button>
            </div> 
        </div>
    );
};

export default Cart;