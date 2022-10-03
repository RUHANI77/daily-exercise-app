import React from 'react';
import './Product.css';

const Product = (props) => {
    
    const { product, handleAddToCart } = props;
    const { img, name, details,age,time} = product;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='container'>
                <h4>{name}</h4>
                <p>{details}</p>
                <p>For Age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time} sec</strong></p>
            </div>
            
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                    <p className='btn-text'>Add to list</p>
            </button>    
        </div>
    );
};

export default Product;