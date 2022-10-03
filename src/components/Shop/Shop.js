import React, { useEffect, useState } from 'react';
import logo from '../images/player-1.png';
import Product from '../Product/Product';
import { addToDb, getStoreCart } from '../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    const handleAddToCart = (product) => {
        console.log(product);
        const NewCart = [...cart, product];
        setCart(NewCart);
    }

    return (

        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map((product) => (<Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>))
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
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
                        <div className='activity-time'>
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
        </div>
    );
};

export default Shop;