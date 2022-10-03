import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';
import { addToDb, getStoreCart } from '../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';
import '../Cart/Cart.css'

const Shop = () => {
   
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    
    useEffect(() => {
        const storedCart = getStoreCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) => {
        let NewCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            NewCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            NewCart = [...rest, exists];
        }
         
        setCart(NewCart);
        addToDb(selectedProduct.id);
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
                    <Cart cart={cart}
                    ></Cart>
                </div>
            </div>
        
    );
};

export default Shop;