import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product

    //const rating = require('react-rating');


    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="product img" />
            </div>
            <div className="product-detail">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="fa fa-star-o icon-color"
                    fullSymbol="fa fa-star icon-color"
                />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular">
                    <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;