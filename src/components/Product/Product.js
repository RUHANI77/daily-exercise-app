import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, details,age,time} = props.product;

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='container'>
                <h4>{name}</h4>
                <p>{details}</p>
                <p>For Age: <strong>{age}</strong></p>
                <p>Time required: <strong>{time}</strong></p>
            </div>
            
                <button className='btn-cart'>
                    <p className='btn-text'>Add to list</p>
                </button>

           
            
        </div>
    );
};

export default Product;